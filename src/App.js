import React from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import CustomModal from './CustomModal'
import 'react-week-calendar/dist/style.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lastUid: 4,
      color:'#ffbbaabb',
      selectedIntervals: [
        {
          uid: 1,
          start: moment({h: 10, m: 5}),
          end: moment({h: 12, m: 5}),
          value: "Booked by Smith",
          color:'#ffaa44bb'
        },
        {
          uid: 2,
          start: moment({h: 13, m: 0}).add(2,'d'),
          end: moment({h: 13, m: 45}).add(2,'d'),
          value: "Closed",
          color:'#f1231abb'
        },
        {
          uid: 3,
          start: moment({h: 11, m: 0}),
          end: moment({h: 14, m: 0}),
          value: "Reserved by White",
          color:'#fad212bb'
        },
      ]
    }
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }

  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
  	console.log(newIntervals)
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index,
        color:interval.color
      }
    });

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
  }


  componentDidUpdate(prevProps) {
  	const { selectedIntervals} = this.state;
 		let arr = document.getElementsByClassName('event');
    for (var j = selectedIntervals.length - 1; j >= 0; j--) {
    	for (var i = arr.length - 1; i >= 0; i--) {
	    	if(arr[i].textContent.substring(13) === selectedIntervals[j].value){
	    		arr[i].style['backgroundColor'] = selectedIntervals[j].color
	    	}
	    }
    }
	}

  render() {
    return <WeekCalendar
      startTime = {moment({h: 9, m: 0})}
      endTime = {moment({h: 18, m: 30})}
      numberOfDays= {7}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
      modalComponent={CustomModal}
    />
  }
}

export default App;
