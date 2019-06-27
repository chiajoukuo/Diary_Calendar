import React, {Component} from "react";
import { conditionalExpression } from "@babel/types";
import styled from 'styled-components'

export default class but extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:20,
            opacity:1.0
        };
    }
    componentWillReceiveProps(nextProps){
        
    }
    butOnClick = (e) => {
        this.props.onClick(e);
        /*
        if(this.props.stat===this.props.id){
            console.log("prop",this.props.stat)
            this.setState({
                width:"25px",
                opacity:1.0
            })
        }
        else{
            this.setState({
                width:"20px",
                opacity:0.8
            })
        }
        */
    }

    render(){
        
        const Image=styled.img`
            transfrom:scale:${this.state.scale}
            opacity:${this.state.opacity}
        `;
        
        //console.log("render but",this.props.id,this.state.scale, this.state.opacity)
        return( 
            <span>
                <Image src={this.props.src} 
                    className="icon" 
                    onClick={this.butOnClick.bind(this)} 
                    alt=""
                />  
            </span>

        );
    }
}