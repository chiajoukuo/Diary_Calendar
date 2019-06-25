import React, { Component } from 'react';
import {CirclePicker} from 'react-color';
import PropTypes from 'prop-types';
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class CustomModal extends Component {
    state = {
        value: this.props.value,
        color : this.props.color,
    }

    static propTypes = {
        start: PropTypes.object.isRequired,
        end: PropTypes.object.isRequired,
        value: PropTypes.string,
        onRemove: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        actionType: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    }

    static defaultProps = {
        value: '',
        color:'#BBAAFF',
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRemove = () => {
        this.props.onRemove();
    }

    handleSave = () => {
        const { value,color } = this.state;
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
            return (<span>{`${start.format('MM/DD ddd. | HH:mm')} - ${end.format('HH:mm')}`}</span>);
        }
        return (<span>{`${start.format('MM/DD ddd.')}~ ${end.format('MM/DD ddd.')} | ${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>);
    }

    render() {
        const {
            value,
        } = this.props;

        return (
            <Container className="customModal" style={{ padding: '20px' }}>
                <h3 style={{textAlign: 'center'}}>{this.renderText()}</h3>
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
                        <Button color="danger" style={{ marginTop: '1rem' }} onClick={this.handleRemove}>Delete</Button>
                        <Button color="info" style={{ marginTop: '1rem', float: 'right' }} onClick={this.handleSave}>Save</Button>
                        <div style={{marginTop:'10px'}}>
                            <p style={{marginBottom:'10px'}}> choose color of the event </p>
                            <CirclePicker color={this.state.color} onChangeComplete={ this.handleChangeComplete } />
                        </div>
                    </FormGroup>
                </Form>
            </Container>

        );
    }
}

export default CustomModal;