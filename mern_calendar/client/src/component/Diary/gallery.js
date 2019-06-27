import React, {Component} from "react";
import Picture from "./components/picture"
import Text from "./components/text"
import But from "./components/but"
import "./components/style.css"

import PropTypes from 'prop-types';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images:[
                {url:"https://i.pinimg.com/originals/0d/d4/15/0dd415c0b4b3a5a51aa2f68faf1030fa.png"}
            ],
            texts:["text0","text1"],
            status:"zoom"
        };
    }

    static propTypes = {
        addComment: PropTypes.func.isRequired,
        diary: PropTypes.object.isRequired
    }

    componentDidMount() {
        // this.props.getDiarys();
    }

    handleZoomOnClick = (e) =>{
        console.log("click z")
        this.setState({
            status:"zoom"
        })
    }
    handleRotOnClick = (e) =>{
        console.log("click r")
        this.setState({
            status:"rotate"
        })
        //console.log(this.state.status)
    }
    dbclick = e =>{
        console.log("rm")
        this.setState({
            
        })
    }
    render(){
        // const { diarys } = this.props.diary;
        const { item } = this.props;
        console.log(item)
        //console.log("render gal",this.state.status)
        const stat=this.state.status
        let dbc=this.dbclick.bind(this)
        let txtlist = item.comments.map(
            function(list){return (
            <Text status={stat} onDoubleClick={dbc}>
                <p>
                    {list.body}
                </p>
            </Text>)
        })
        let piclist = item.images.map(function(list){
            return(
                <Picture src={list.url} status={stat}>
                </Picture>
            )
        })
        return(
            //<img src={this.state.images[0]}/>
            <div>
                <div>
                    <But src="https://image.flaticon.com/icons/svg/359/359414.svg" stat={this.state.status} id="zoom" onClick={this.handleZoomOnClick.bind(this)}></But> 
                    <But src="https://image.flaticon.com/icons/svg/1330/1330172.svg" stat={this.state.status} id="rotate" onClick={this.handleRotOnClick.bind(this)}></But>
                </div>
                {txtlist}
                {piclist}
            </div>
            
        );
    }
}

export default Gallery;