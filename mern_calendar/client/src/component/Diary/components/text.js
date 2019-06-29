import React from "react";
import styled, { css } from "styled-components";
import Element from "./element";
import "./style.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { connect } from 'react-redux';
import { updateImage, deleteImage } from '../../../actions/diaryActions';
import PropTypes from 'prop-types';

export default class Text extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            scale: 1.0,//this.props.item.width,
            rotateDeg: 0.0,//this.props.item.rotateDeg,
            isDragging: false,
      
            originalX: 0,
            originalY: 0,
      
            translateX: 0,//this.props.item.lastTranslateX,
            translateY: 0,//this.props.item.lastTranslateY,
      
            lastTranslateX: 0,//this.props.item.lastTranslateX,
            lastTranslateY: 0//this.props.item.lastTranslateY,
        };
    }
    MousewheelScale = e => {     
        //console.log("mouse", e.deltaY);
        //滾輪往下deltaY>0
        if (this.props.status === "zoom") {
            //console.log("status",this.props.status)
            let ww = this.state.scale;
            if (e.deltaY > 0) {
                ww = ww - 0.1;
            } 
            else {
                ww = ww + 0.1;
            }
            this.setState({
              scale: ww
            });
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
    };
    handleDoubleClick = () => {
        //this.props.onDoubleClick(e);
        console.log("handle double click")
        this.toggle();
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    render() {
        const { isDragging } = this.state;
        return (  
            <div>  
                <TXT 
                rot={this.state.rotateDeg}
                tx={this.state.translateX}
                ty={this.state.translateY}
                scale={this.state.scale}
                className="txtCard"
                onDoubleClick={this.handleDoubleClick.bind(this)}
                onWheel={this.MousewheelScale.bind(this)}
                onMouseDown={this.handleMouseDown}
                isDragging={isDragging}
                alt=""
                >
                    { this.props.children }
                </TXT> 
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >
                    <ModalHeader onClick={this.toggle}>Comment Editor</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="url">Edit Your Comment</Label>
                                <Input
                                type="text"
                                name="url"
                                id="url"
                                value={this.state.url}
                                className='mb-3'
                                placeholder="New Comment"
                                onChange={this.onChange}
                                />
                                <Button variant="contained" size="small" color="secondary" style={{ marginTop: '15px' }} onClick={this.handleDelete}>
                                <DeleteIcon style={{ marginRight: '0.5rem' }} />Delete
                                </Button>
                                <Button variant="contained" size="small" color="primary" style={{ marginTop: '15px', float: 'right' }} onClick={this.handleUpdate}>
                                Save<SaveIcon style={{ marginLeft: '0.5rem' }} />
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

            </div> 
            );
    }
}

const TXT = styled.div`
transform:  translate(${props => props.tx}px, ${props => props.ty}px) scale(${props=>props.scale})rotate(${props => props.rot}deg);
cursor: grab;
${({ isDragging }) =>
    isDragging && css`
  opacity: 0.8;
  cursor: grabbing;
`};
`