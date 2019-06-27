import React from 'react';
//import styled, { css } from 'styled-components';
import Element from "./element"
import "./style.css"

export default class Text extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style: {}
        };
        this.scale = 1.0;
        this.rotateDeg = 0;
    }
    MousewheelScale = e => {
        //https://github.com/panyefan/ShowPicture/blob/master/ShowPicture/ShowPicture.js
        
        //console.log("mouse", e.deltaY);
        //滾輪往下deltaY>0
        if(this.props.status==="zoom"){
            //console.log("status",this.props.status)
            if (e.deltaY > 0) {
            this.scale = this.scale - 0.1;
            } else {
            this.scale = this.scale + 0.1;
            }
            this.setState({
            style: { transform: `rotate(${this.rotateDeg}deg) scale(${this.scale})` }
            });
            //console.log("this.scale: ", this.scale);
            e.stopPropagation();
            e.preventDefault();
        }
        else if(this.props.status==="rotate"){
            //console.log("status",this.props.status)
            if(e.deltaY > 0){
                this.rotateDeg = this.rotateDeg - 2;
            }
            else{
                this.rotateDeg = this.rotateDeg + 2;
            }
            this.setState({
                style: { transform: `rotate(${this.rotateDeg}deg) scale(${this.scale})` }
            });
            e.stopPropagation();
            e.preventDefault();
    
        }
        
    };
    render() {
        //console.log("render txt",this.props.status)
        return (
        <Element >
            <div onWheel={this.MousewheelScale.bind(this) }
                className="txtCard"
                style={this.state.style}
                onDoubleClick={this.props.onDoubleClick}
                >
                { this.props.children }
            </div>
            
        </Element>
        );
    }
}

