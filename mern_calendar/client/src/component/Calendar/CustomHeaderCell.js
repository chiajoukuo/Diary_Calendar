import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

class CustomHeaderCell extends React.PureComponent {
    static propTypes = {
        date: PropTypes.object.isRequired,
        dayFormat: PropTypes.string.isRequired,
    }

    render() {
        const {
            date,
            dayFormat,
        } = this.props;
        return (
            <NavLink
                to={"/diary/" + date.format("YYYY-MM-DD")}
                style={{ color: "Navy", fontSize: "1.2rem" }}
            >{date.format(dayFormat)}</NavLink>
        );
    }
}

export default CustomHeaderCell;