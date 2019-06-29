import React, { Component } from 'react';

import './ImgCard.css';

class ImgCard extends Component {

    render() {
        return (
            <figure className="imgcard-figure" id="img-1">
                <div className="imgcard-front">
                    <img style={{ width: '240px', verticalAlign: 'middle' }} src={this.props.src} alt="2019-06-25" />
                    <h3 className="imgcard-title">2019-06-25</h3>
                </div>
            </figure>
        );
    }
}

export default ImgCard;