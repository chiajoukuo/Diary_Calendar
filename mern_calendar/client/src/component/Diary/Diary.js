import React, { Component } from 'react';
import Gallery from './gallery';


class Diary extends Component {
    render() {
        const { item } = this.props;
        
        return (
            <Gallery item={item}></Gallery>
        );
    }
}

export default Diary;