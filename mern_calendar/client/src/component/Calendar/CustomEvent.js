import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};


class CustomEvent extends React.PureComponent {
    
  inverttostring = (interger) =>{
    if(interger<0)
      return "00"
    else if (interger>=10)
      return String(interger)
    else
      return '0'+String(interger)
  } 


  render() {
    const {
      start,
      end,
      value,
      _id
    } = this.props;
    return (
      <div className="event" id={_id}>
        <span>{ this.inverttostring(start.hour()) + ':' + this.inverttostring(start.minute()) +" - "+ this.inverttostring(end.hour()) + ':' + this.inverttostring(end.minute()-15)}</span>
        <br /><br />
        <span>{value}</span>
      </div>
    );
  }
}

CustomEvent.propTypes = propTypes;
export default CustomEvent;