import React from 'react';
import '../styles.css'

let y

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:'',
      checked:false,
      event:'',
      stime:8,
      etime:9,
      y_top:0,
      cover_height:'300px'
    };
  }

  clicked = (e) =>{
    y = e.screenY;
    console.log(y)
    this.setState(this.state.concat([
      {id:2,name:"Another Name"}
    ]))

    if (this.state.checked===false)
    this.setState({
      checked:true,
      display:'block',
      y_top:y-250
    })
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
    return(
      <div className='timeslot'>
        <div id='inside' className='slot_inside' onClick={(e)=>this.clicked(e)}>
          {
            this.state.map((item) => (
              <SampleComponent key={item.id} name={item.name}/>
            ))
          }
          <div id='cover' onMouseUp={this.onMouseUp} className="slot_cover" style={{display:display ,height:cover_height,marginTop:y_top }}>
            <span>{stime} - {etime}</span>
            <button onClick={this.unselect}>x</button>
            <input type='text' placeholder='enter event' onChange={e=>{this.setState({event:e.target.value})}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Slot;
