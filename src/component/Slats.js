import React from 'react';
import '../styles.css'

class Slats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    let timeline = String(this.props.id+8) + ' ~ ' + String(this.props.id+9)
    const slats = this.state.arr.map((square, index) => {
      return (
        <Slat
          color={slot_color_arr[index]} 
          id={index}
          etime={this.state.etime}
          stime={this.state.stime}
          handleClick = {()=>this.onClick(index)}
        />
      );
    })
    )
  }
}

export default Slats;
