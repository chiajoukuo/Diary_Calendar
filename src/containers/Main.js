import React from 'react';
import '../styles.css'
import Slat from '../component/Slat.js'
import Slot from '../component/Slot.js'
import Cover from '../component/Cover.js'


let mousedown = false
const white = '#f5f5f5'

function Event(id,color,event){
  this.id = id;
  this.color = color;
  this.event = event;
}


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr:[1,2,3,4,5,6,7],
      slot_color_arr: Array(9).fill(white),
      event:Array(9).fill(null),
      color:'#61d5ff',
      paint:'#61d5ff',
      stime:0,
      etime:0,
    };
  }

  // onMouseDown = (id)=>{
  //   mousedown = true
  // }
  onMouseUp = (id)=>{
    mousedown = false
  }

  onMouseOver = (id)=>{
    const {etime,stime,slot_color_arr,color} = this.state
    let temparr = slot_color_arr
    if(mousedown === true && temparr[id]==="#f5f5f5"){ 
      temparr[id] = color
      this.setState({
        slot_color_arr:temparr
      })
    }
  }

  onMouseDown = (id) =>{
    mousedown = true
    const {event,slot_color_arr,color,paint} = this.state

    if(slot_color_arr[id] !== white){  //非白色:delete
      let temp_col = slot_color_arr
      let temp_event = event
      temp_col[id] = white
      temp_event[id] = null

      this.setState({
        slot_color_arr:temp_col,
        color:white
      })
    }
    else{
      let temparr = slot_color_arr 
      if(temparr[id] === white){        
        temparr[id] = paint
      }
      this.setState({
        color:paint
      })
    }

    // else if((8+id)-stime === -1){
    //   let temparr = slot_color_arr
    //   temparr[id] = color
    //   this.setState({
    //     stime:this.state.stime-1,
    //   })
    // }
    // else if(etime-8-id === 0){
    //   let temparr = slot_color_arr
    //   temparr[id] = color
    //   this.setState({
    //     etime:9+id,
    //   })
    // }
  }

  newevent = (e) =>{
    if(e.key === 'Enter'){
      let arr = this.state.event
      const {slot_color_arr,event,color} = this.state
      for (var i = 0; i < event.length; i++){
        if(slot_color_arr[i] === color)
          arr[i] = e.target.value
      }  
      this.setState({
        event:arr
      })
      e.target.value = "";
    }
  }

  render(){
    const {etime,stime,slot_color_arr,event} = this.state
    const slats = this.state.arr.map((square, index) => {
      return (
        // change Slot or Slat to see different style 
        <Slot
          color={slot_color_arr[index]} 
          id={index}
          etime={this.state.etime}
          stime={this.state.stime}
          onMouseDown = {(e)=>this.onMouseDown(index)}
          onMouseUp = {(e)=>this.onMouseUp(e)}
          onMouseOver = {(e)=>this.onMouseOver(index)}
          text = {this.state.event[index]}
        />
      );
    })
    return(
      <div>
        <div style={{margin:'100px 100px 100px 100px' ,float:'left', width:'10em'}}>
          <div className='main_calender'>
            <div>
              {slats}
            </div>
          </div>
        </div>
        <input type="radio" name="c" value="#61d5ff" onChange={e=>{this.setState({
          paint: e.target.value
        })}}/>blue<br/>
        <input type="radio" name="c" value="#94ffa0" onChange={e=>{this.setState({
          paint: e.target.value
        })}}/>green<br/>
        
        <select onChange={e=>{this.setState({
          paint: e.target.value
        })}}>
          <option value='#61d5ff' style={{backgroundColor:"#61d5ff"}}>blue</option>
          <option value="#94ffa0" style={{backgroundColor:"#94ffa0"}}>green</option>
          <option value="#f9ff75" style={{backgroundColor:"#f9ff75"}}>yellow</option>
        </select>
        <p>{stime} ~ {etime}</p>
        <span>event : </span><input type='text' onKeyPress={(e)=>this.newevent(e)}></input>
      </div>
    )
  }
}

export default Main;
