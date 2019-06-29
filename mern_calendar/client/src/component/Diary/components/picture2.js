import React from "react";
import styled, { css } from "styled-components";
// import Element from "./element";
import "./style.css";

import { connect } from 'react-redux';
import { updateImage } from '../../../actions/diaryActions';
import PropTypes from 'prop-types';

class Picture2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //style: {transform: `rotate(${this.props.rot}deg) scale(${this.props.scale})` },
      width: this.props.item.width,
      rotateDeg: this.props.item.rotateDeg,
      isDragging: false,

      originalX: 0,
      originalY: 0,

      translateX: this.props.item.lastTranslateX,
      translateY: this.props.item.lastTranslateY,

      lastTranslateX: this.props.item.lastTranslateX,
      lastTranslateY: this.props.item.lastTranslateY,
    };
    //this.scale = this.props.scale;
    //this.rotateDeg = this.props.rot;
  }

  static propTypes = {
    updateImage: PropTypes.func.isRequired
  }

  MousewheelScale = e => {
    //https://github.com/panyefan/ShowPicture/blob/master/ShowPicture/ShowPicture.js
    const { diaryID, item } = this.props;
    //console.log("mouse", e.deltaY);
    //滾輪往下deltaY>0
    if (this.props.status === "zoom") {
      //console.log("status",this.props.status)
      let ww = this.state.width;
      if (e.deltaY > 0) {
        ww = ww - 2;
      } else {
        ww = ww + 2;
      }
      if (ww < 5) {
        ww = 5;
      }
      else if (ww > 70) {
        ww = 70;
      }
      this.setState({
        width: ww
      });
      
      const updateWidthImg = {
        lastTranslateX: this.state.lastTranslateX,
        lastTranslateY: this.state.lastTranslateY,
        width: this.state.width,
        rotateDeg: this.state.rotateDeg,
        _id: item._id,
        url: item.url
      }

      this.props.updateImage(diaryID, updateWidthImg);
      //console.log("width: ", this.state.width);
      e.stopPropagation();
      e.preventDefault();
    }
    else if (this.props.status === "rotate") {
      //console.log("status",this.props.status)
      let rr = this.state.rotateDeg;
      if (e.deltaY > 0) {
        rr = rr - 2;
      }
      else {
        rr = rr + 2;
      }
      this.setState({
        rotateDeg: rr
      });
      const updateRotateImg = {
        lastTranslateX: this.state.lastTranslateX,
        lastTranslateY: this.state.lastTranslateY,
        width: this.state.width,
        rotateDeg: this.state.rotateDeg,
        _id: item._id,
        url: item.url
      }

      this.props.updateImage(diaryID, updateRotateImg);
      //console.log("deg: ", this.state.rotateDeg);
      e.stopPropagation();
      e.preventDefault();

    }

  };
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = (e) => {

    //console.log("md")
    //console.log(this.state.lastTranslateX,this.state.lastTranslateY)
    var clientX = e.clientX;
    var clientY = e.clientY;
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    });
    e.preventDefault()
  };

  handleMouseMove = ({ clientX, clientY }) => {
    //console.log("mm")
    const { isDragging } = this.state;
    const { onDrag } = this.props;

    if (!isDragging) {
      return;
    }

    this.setState(prevState => ({
      translateX: clientX - prevState.originalX + prevState.lastTranslateX,
      translateY: clientY - prevState.originalY + prevState.lastTranslateY
    }), () => {
      if (onDrag) {
        onDrag({
          translateX: this.state.translateX,
          translateY: this.state.translateY
        });
      }
    });
  };

  handleMouseUp = () => {
    //console.log("mu")
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState(
      {
        originalX: 0,
        originalY: 0,
        lastTranslateX: this.state.translateX,
        lastTranslateY: this.state.translateY,

        isDragging: false
      },
      () => {
        if (this.props.onDragEnd) {
          this.props.onDragEnd();
        }
      }
    );

    const { diaryID, item } = this.props;
    const updatePositionImg = {
      lastTranslateX: this.state.lastTranslateX,
      lastTranslateY: this.state.lastTranslateY,
      width: this.state.width,
      rotateDeg: this.state.rotateDeg,
      _id: item._id,
      url: item.url
    }

    this.props.updateImage(diaryID, updatePositionImg);
  };
  render() {
    console.log("pic2")

    //console.log("width: ", this.state.width);
    //console.log("render pic",this.props.status)
    /*
    return (
      <img
        src={this.props.src}
        className="pic"
        onWheel={this.MousewheelScale.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        style={this.state.style}
      />
    );
    */
    const Image = styled.img`
        transform: rotate(${this.state.rotateDeg}deg) translate(${this.state.translateX}px, ${this.state.translateY}px);
        width:${this.state.width}%;
        cursor: grab;
        ${({ isDragging }) =>
        isDragging && css`
          opacity: 0.8;
          cursor: grabbing;
        `};
    `
    const { isDragging } = this.state;
    const { item } = this.props;
    return (
      //<img src="https://image.flaticon.com/icons/svg/32/32178.svg" className="x"/>
      /*
      <div className="ele">
        <img
          src={this.props.src}
          className="pic"
          onWheel={this.MousewheelScale.bind(this)}
          style={this.state.style}
          alt=""
        />
      </div>
      */
      <Image src={item.url}
        className="pic"
        onWheel={this.MousewheelScale.bind(this)}
        onMouseDown={this.handleMouseDown}
        isDragging={isDragging}
        alt=""
      ></Image>


    );

  }
}

const mapStateToProps = (state) => ({
  diary: state.diary,
  user: state.auth.user
})

export default connect(mapStateToProps, { updateImage })(Picture2);