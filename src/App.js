import React from 'react';
import './App.css';
import AvailableTimes from 'react-available-times';

function App() {
  return (
    <div className="App" >
    	<div>    		
			<AvailableTimes
		
			  calendars={[
			    {
			      id: 'work',
			      title: 'Work',
			      foregroundColor: '#ff00ff',
			      backgroundColor: '#f0f0f0',
			      selected: true,
			    },
			    {
			      id: 'private',
			      title: 'My private cal',
			      foregroundColor: '#666',
			      backgroundColor: '#f3f3f3',
			    },
			  ]}
			  onChange={(selections) => {
			    console.log(selections)
			    selections.forEach(({ start, end }) => {
			      console.log('Start:', start, 'End:', end);
			    })
			  }}
			  // onEventsRequested={({ calendarId, start, end, callback }) => {
			  //   loadMoreEvents(calendarId, start, end).then(callback);
			  // }}
			  height={1000}
			  width={1000}
			  recurring={false}
			  availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday','saturday','sunday']}
			  availableHourRange={{ start: 0, end: 24 }}
			/>  
			</div>	   	
    </div>
  );
}

export default App;
