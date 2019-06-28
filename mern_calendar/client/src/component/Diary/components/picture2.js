import React from "react";
import styled, { css } from "styled-components";
import Element from "./element";
import "./style.css";

export default class Picture2 extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      //style: {transform: `rotate(${this.props.rot}deg) scale(${this.props.scale})` },
        width:this.props.w,
        rotateDeg:this.props.rot,
        isDragging: false,

        originalX: 0,
        originalY: 0,
  
        translateX: 0,
        translateY: 0,
  
        lastTranslateX: 0,
        lastTranslateY: 0
    };
    //this.scale = this.props.scale;
    //this.rotateDeg = this.props.rot;
  }


  MousewheelScale = e => {
    //https://github.com/panyefan/ShowPicture/blob/master/ShowPicture/ShowPicture.js
    
    //console.log("mouse", e.deltaY);
    //滾輪往下deltaY>0
    if(this.props.status==="zoom"){
        //console.log("status",this.props.status)
        let ww=this.state.width;
        if (e.deltaY > 0) {
            ww = ww - 2;
        } else {
            ww = ww + 2;
        }
        if (ww<5){
            ww = 5;
        }
        else if (ww>70){
            ww = 70;
        }
        this.setState({
            width:ww
        });
        //console.log("width: ", this.state.width);
        e.stopPropagation();
        e.preventDefault();
    }
    else if(this.props.status==="rotate"){
        //console.log("status",this.props.status)
        let rr = this.state.rotateDeg;
        if(e.deltaY > 0){
            rr = rr - 2;
        }
        else{
            rr = rr + 2;
        }
        this.setState({
            rotateDeg:rr
        });
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
    var clientX=e.clientX;
    var clientY=e.clientY;
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
        <Image src={this.props.src}
        className="pic"
        onWheel={this.MousewheelScale.bind(this)}
        onMouseDown={this.handleMouseDown}
        isDragging={isDragging}
        alt=""
        ></Image>


    );
    
  }
}
