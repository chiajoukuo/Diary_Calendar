import React from 'react';
import '../styles.css'
import Cover from './Cover.js'

let y

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:'',
      event:[],
      stime:8,
      etime:9,
      y_top:0,
      cover_height:'300px'
    };
  }

  isclicked = (y) =>{
    const temp = this.state.event
    for (var i = 0; i < temp.length ; i++) {
      if(temp[i].y_bot+280 > y && temp[i].y_top+220 < y)
          return true
    }
    return false
  }

  clicked = (e) =>{
    y = e.screenY;
    console.log(this.state.event)
    if(this.isclicked(y) === false){
      let arr = this.state.event
      arr.push({id:1,y_top:y-250,y_bot:y-170})
      this.setState({
        display:'block',
        y_top:y-250,
        event:arr
      })
    }
  }

  unselect = () =>{
    console.log(2)
    // if (this.state.visible==='visible')
    this.setState({
      checked:false,
      display:'none'
    })
  }
  onMouseUp = (e)=> {
    y = document.getElementById('cover').clientHeight;
    this.setState({
      etime: 9+7*((y-48)/432)
    })
  }

  render(){
     const {
      y_top,checked,display,etime,stime,cover_height
    } = this.state
    let covers =  this.state.event.map((item,index) => {
      return (
          <Cover y_top={item.y_top} key={index} />
      );
    })

    return(
      <div className='timeslot'>
        <div id='inside' className='slot_inside' onClick={(e)=>this.clicked(e)}>
          { covers }
        </div>
      </div>
    )
  }
}

export default Slot;
