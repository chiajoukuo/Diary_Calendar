import React from 'react';
import '../styles.css'

let y

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event:'',
      stime:8,
      etime:9,
      y_top:0,
      y_bot:0
    };
  }

  handleclick = (e) =>{
    let y= e.screenY
  }

  render(){
    const { y_top,display,etime,stime } = this.state
    return(
      <div className="slot_cover" onClick={(e)=>this.handleclick(e)} style={{marginTop:this.props.y_top}}>
        <span>{stime} - {etime}</span>
        <button>x</button>
        <input type='text' placeholder='enter event'/>
      </div>
    )
  }
}

export default Cover;
