import React, { Component } from 'react';
import {CirclePicker} from 'react-color';
import PropTypes from 'prop-types';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class CustomModal extends Component {
    state = {
        value: '',
        color: '#BBAAFF',
    }

    static propTypes = {
        start: PropTypes.object.isRequired,
        end: PropTypes.object.isRequired,
        value: PropTypes.string,
        onRemove: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        actionType: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    }

    static defaultProps= {
        value: '',
        color:'#BBAAFF'
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRemove = () => {
        this.props.onRemove();
    }

    handleSave = () => {
        const { color,value } = this.state;
        this.props.onSave({
            value,
            color
        });
    }

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    

    renderText() {
        const {
            start,
            end,
        } = this.props;

        if (start.isSame(end, 'day')) {
            return (<span>{`${start.format('Do MMM., HH:mm')} - ${end.format('HH:mm')}`}</span>);
        }
        return (<span>{`${start.format('Do MMM.')} - ${end.format('Do MMM.')}, ${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>);
    }

    render() {
        const {
            value,
            color,
        } = this.props;

        return (
            <div className="customModal" style={{ padding: '20px' }}>
                <Form>
                    <FormGroup>
                        <Label for="value">Event</Label>
                        <Input
                            type="text"
                            name="value"
                            id="value"
                            className='mb-2'
                            placeholder="Enter something"
                            defaultValue={value}
                            onChange={this.onChange}
                        />
                        <Button color="info" style={{ marginTop: '1rem', float: 'right' }} onClick={this.handleSave}>Save</Button>
                        <Button color="danger" style={{ marginTop: '1rem' }} onClick={this.handleRemove}>Delete</Button>
                        <CirclePicker color={this.state.color} onChangeComplete={ this.handleChangeComplete } />
                        <div style={{backgroundColor:this.state.color}}> test</div>
                   </FormGroup>
                </Form>
            </div>

        );
    }
}

export default CustomModal;