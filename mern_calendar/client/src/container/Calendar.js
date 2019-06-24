import React, { Component } from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';

import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';

class Calendar extends Component {
    componentDidMount() {
        this.props.getEvents();
    }

    handleSelect = (newEvent) => {

    }

    handleEventUpdate = (event) => {

    }

    handleEventRemove = (event) => {

    }

    render() {
        const { events } = this.props.event;
        events.map(event => {
            event.start = moment(event.start).add(event.day, "d");
            event.end = moment(event.end).add(event.day, "d");
            return event;
        });
        console.log(events)
        return (
            <div>
                <WeekCalendar
                    numberOfDays={7}
                    dayFormat={"MM/DD ddd."}
                    startTime={moment({h:8, m:0})}
                    selectedIntervals={events}
                    onIntervalSelect={this.handleSelect}
                    onIntervalUpdate={this.handleEventUpdate}
                    onIntervalRemove={this.handleEventRemove}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    event: state.event
});

export default connect(mapStateToProps, { getEvents })(Calendar);