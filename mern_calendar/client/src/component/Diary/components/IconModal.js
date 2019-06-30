import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addImage } from '../../../actions/diaryActions';
import PropTypes from 'prop-types';
import './style.css'
import Sticker from "./Sticker"

class IconModal extends Component {
    state = {
        modal: false,
        url: '',
        sticker:-1,
        
    }
    stickers=["https://cdn1.imggmi.com/uploads/2019/6/30/a7d096e20f223d3eaf6568724d67ff6e-full.png",
                    "https://cdn1.imggmi.com/uploads/2019/6/30/70df7c1dad5df894da41d87cb979056e-full.png",
                    "https://cdn1.imggmi.com/uploads/2019/6/30/c2ae734d7720a63c7bbbc4f7a178e5be-full.png",
                    "https://cdn1.imggmi.com/uploads/2019/6/30/0a68188e2f4d7b8a4e0f406b06a31649-full.png",
                    "https://cdn1.imggmi.com/uploads/2019/6/30/1f9894f8805fac29789e4fce1d2e4cd6-full.png"

                ]
    static propTypes = {
        addImage: PropTypes.func.isRequired,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            url: ''
        });
    }
    /*
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    */

    addImg = e => {
        console.log("sub")
        
        e.preventDefault();
        if(this.state.sticker<0){

        }
        else{

            console.log("stic",this.state.url)
            const newImage = {
                url: this.state.url
            }
            // Add image via addImage action
            this.props.addImage(this.props.diaryID, { image: newImage });
        }
        // Close modal
        this.toggle();
        
    }
    clickSticker = (src) => {
        //console.log("url", src)
        this.setState({
            sticker:src,
            url:this.stickers[src]
        })
        console.log(this.state.sticker)
    }
    render() {
        return (
            <div style={{display:'inline'}}>
                <Button
                    className = "botton2"
                    style={{ marginLeft: '1rem' }}
                    onClick={this.toggle}
                >Add Stiker</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader onClick={this.toggle}>Add Stikers to Diary</ModalHeader>
                    <ModalBody>
                        <div>
                            <Sticker src={this.stickers[0]} className="sticker" onClick={this.clickSticker.bind(this,0)} nowStic={this.state.sticker} sel="0"/>
                            <Sticker src={this.stickers[1]} className="sticker" onClick={this.clickSticker.bind(this,1)} nowStic={this.state.sticker} sel="1"/>
                            <Sticker src={this.stickers[2]} className="sticker" onClick={this.clickSticker.bind(this,2)} nowStic={this.state.sticker} sel="2"/>
                            <Sticker src={this.stickers[3]} className="sticker" onClick={this.clickSticker.bind(this,3)} nowStic={this.state.sticker} sel="3"/>                            
                            <Sticker src={this.stickers[4]} className="sticker" onClick={this.clickSticker.bind(this,4)} nowStic={this.state.sticker} sel="4"/>
                         </div>
                         <Button onClick={this.addImg}color="dark" style={{ marginTop: '0px' }} block>
                            Add Image
                        </Button>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps, { addImage })(IconModal);
