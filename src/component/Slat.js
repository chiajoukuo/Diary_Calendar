import React from 'react';
import '../styles.css'

class Slat extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let timeline = String(this.props.id+8) + ' ~ ' + String(this.props.id+9)
    return(
      <div>
        <div id={this.props.id} 
              className='slot' 
              onMouseOver={this.props.onMouseOver}
              onMouseUp = {this.props.onMouseUp}
              onMouseDown={this.props.onMouseDown} 
              style={{backgroundColor:this.props.color}}>
          <p>{timeline}</p>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Slat;
