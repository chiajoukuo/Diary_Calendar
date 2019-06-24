import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  date: PropTypes.object.isRequired,
  dayFormat: PropTypes.string.isRequired,
};


class CustomHeaderCell extends React.PureComponent {
  render() {
    const {
      date,
      dayFormat,
    } = this.props;
    return (<span className="title">{date.format(dayFormat)}</span>);
  }
}

CustomHeaderCell.propTypes = propTypes;
export default CustomHeaderCell;