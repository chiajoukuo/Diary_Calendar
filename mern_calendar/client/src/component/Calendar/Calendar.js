import React, { Component } from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import '../../styles.css'
import { Button } from 'reactstrap';
import CustomModal from './CustomModal';
import CustomEvent from './CustomEvent';
import CustomHeaderCell from './CustomHeaderCell';
import CustomDayCell from './CustomDayCell';

import { connect } from 'react-redux';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../../actions/eventActions';
import { loadUser } from '../../actions/authActions';

var day = moment().day()
class Calendar extends Component {
    componentDidMount() {
        this.props.getEvents();
        this.props.loadUser();
    }

    state = {
        firstDay: moment().add(-day, 'd')
    }


    handleSelect = (newIntervals) => {
        newIntervals.map(interval => {
            const newEvent = {
                start: interval.start.valueOf(),
                end: interval.end.valueOf(),
                value: interval.value,
                color: interval.color,
                userID: this.props.auth.user._id
            }
            this.props.addEvent(newEvent);
            return newEvent;
        })
    }

    handleEventUpdate = (event) => {
        const { events } = this.props.event;
        const value = event._id;
        var colorr_from_id = '';
        var text_from_id = '';
        for (var i = events.length - 1; i >= 0; i--) {
            if (events[i]._id === value) {
                colorr_from_id = events[i].color
                text_from_id = events[i].value
            }
        }
        if(event.allEvent === true){
	        for (i = events.length - 1; i >= 0; i--) {
	            if (events[i].value === text_from_id 
	                && events[i].color === colorr_from_id 
	                && events[i].userID === event.userID) {
	                const update = {
	                    _id: events[i]._id,
	                    color: event.color,
	                    value: event.value,
	                    start: moment(events[i].start).set({'hours': moment(event.start).get('hours'), 'minutes': moment(event.start).get('minutes')}).valueOf(),
	                    end: moment(events[i].end).set({'hours': moment(event.end).get('hours'), 'minutes': moment(event.end).get('minutes')}).valueOf(),
	                    //start: events[i].start,
	                    // end: events[i].end,	                 
	                    userID: events[i].userID
	                }
	                this.props.updateEvent(update);
	            }
	        }
      	}
      	else{
      		const update = {
              _id: event._id,
              color: event.color,
              value: event.value,
              start: event.start,
              end: event.end,
              userID: event.userID
          }
          this.props.updateEvent(update);
      	}
        
    }

    handleEventRemove = (event) => {
    		console.log(event)
        const { events } = this.props.event;
        if(event.allEvent === true){
	        for (var i = events.length - 1; i >= 0; i--) {
	            if (events[i].value === event.value && events[i].color === event.color && events[i].userID === event.userID) {
	                this.props.deleteEvent(events[i]._id)
	            }
	        }
	      }
	      else{
        	this.props.deleteEvent(event._id);
        }
    }

    nextWeek = () => {
        const modified = moment(this.state.firstDay);
        this.setState({
            firstDay: modified.add(7, "d")
        })
    }
    lastWeek = () => {
        const modified = moment(this.state.firstDay);
        this.setState({
            firstDay: modified.add(-7, "d")
        })
    }

    componentDidUpdate(prevProps) {
        const { events } = this.props.event;
        //console.log(arr[0].style['backgroundColor'])
        for (var i = events.length - 1; i >= 0; i--) {
        	let arr = document.getElementById(events[i]._id);
        	if(arr !== null){
                arr.style['backgroundColor'] = (events[i].color + "cb")  
                arr.style['color'] = '#fff'    
            }     
        }
    }

    render() {
        const { events } = this.props.event;
        const { user } = this.props.auth;
        const intervals = events.filter(event => event.userID === user._id).map(event => {
            const start = moment(event.start);
            const end = moment(event.end);
            const newInterval = {
                _id: event._id,
                value: event.value,
                start: start,
                end: end,
                color: event.color,
                userID: event.userID
            };
            return newInterval;
        });
        
        return (
            <div>
                <Button
                    color="primary"
                    size="sm"
                    className="mb-2 mr-2 btn"
                    onClick={this.lastWeek}
                >Last week</Button>
                <Button
                    color="info"
                    size="sm"
                    style={{ float: 'right' }}
                    className="mb-2 btn"
                    onClick={this.nextWeek}
                >Next week</Button>

                <WeekCalendar
                    firstDay={this.state.firstDay}
                    numberOfDays={7}
                    scaleHeaderTitle={"click date ->"}
                    dayFormat={"MM/DD ddd."}
                    startTime={moment({ h: 8, m: 0 })}
                    endTime={moment({ h: 20, m: 1 })}
                    selectedIntervals={intervals}
                    onIntervalSelect={this.handleSelect}
                    onIntervalUpdate={this.handleEventUpdate}
                    onIntervalRemove={this.handleEventRemove}
                    headerCellComponent={CustomHeaderCell}
                    dayCellComponent={CustomDayCell}
                    modalComponent={CustomModal}
                    eventComponent={CustomEvent}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    event: state.event,
    auth: state.auth
});

export default connect(mapStateToProps, { loadUser, getEvents, addEvent, updateEvent, deleteEvent })(Calendar);