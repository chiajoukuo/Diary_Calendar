import React, { Component } from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import '../styles.css'
import { Button } from 'reactstrap';
import CustomModal from '../component/Calendar/CustomModal';
import CustomEvent from '../component/Calendar/CustomEvent';
import CustomHeaderCell from '../component/Calendar/CustomHeaderCell';
import CustomDayCell from '../component/Calendar/CustomDayCell';

import { connect } from 'react-redux';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../actions/eventActions';

class Calendar extends Component {
    componentDidMount() {
        this.props.getEvents();
    }

    state = {
        firstDay: moment()
    }

    handleSelect = (newIntervals) => {
        newIntervals.map(interval => {
            const newEvent = {
                start: interval.start.valueOf(),
                end: interval.end.valueOf(),
                value: interval.value,
                color: interval.color+'bb'

            }
            this.props.addEvent(newEvent);
            return newEvent;
        })
    }

    handleEventUpdate = (event) => {
        const value = event._id
        console.log(value)
        const update = {
            ...event,
            start: event.start.valueOf(),
            end: event.end.valueOf(),
            color: event.color+'bb'
        }
        this.props.updateEvent(update);
    }

    handleEventRemove = (event) => {
        const { events } = this.props.event;
        for (var i = events.length - 1; i >= 0; i--) {
            if(events[i].value === event.value){
                this.props.deleteEvent(events[i]._id)
            }
        }
        //this.props.deleteEvent(event._id);
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
    let arr = document.getElementsByClassName('event');
    for (var j = events.length - 1; j >= 0; j--) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if(arr[i].textContent.substring(13) === events[j].value){
                arr[i].style['backgroundColor'] = events[j].color
            }
        }
    }
    }

    render() {
        const { events } = this.props.event;
        const intervals = events.map(event => {
            const start = moment(event.start);
            const end = moment(event.end);
            const newInterval = {
                _id: event._id,
                value: event.value,
                start: start,
                end: end,
                color: event.color
            };
            return newInterval;
        })
        //console.log(events)
        //console.log(intervals)
        return (
            <div>
                <Button
                    color="primary"
                    size="sm"
                    className="mb-2 mr-2"
                    onClick={this.lastWeek}
                >Last week</Button>
                <Button
                    color="info"
                    size="sm"
                    className="mb-2"
                    onClick={this.nextWeek}
                >Next week</Button>

                <WeekCalendar
                    firstDay={this.state.firstDay}
                    numberOfDays={7}
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
    event: state.event
});

export default connect(mapStateToProps, { getEvents, addEvent, updateEvent, deleteEvent })(Calendar);