import React, { Component, Fragment } from 'react';
import { Container, Col, Row, Nav } from 'reactstrap';

import Calendar from '../component/Calendar/Calendar';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CalendarPage extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render() {
        return (
            <section className="jumbotron-header mb-3 mt-2">
                <h1 className="jumbotron-heading display-4 text-center">Calendar</h1>
                {this.props.isAuthenticated ?
                    <Fragment>
                        <p className="lead text-center">Manage your events</p>
                        <Container>
                            <Nav tabs className="justify-content-center mb-3"></Nav>
                            <Calendar />
                        </Container >
                    </Fragment>
                    : <Container>
                        <Row>
                            <Col>
                                <p className="lead text-center">please LOGIN to Manage your Calendar</p>
                                <p className="text-center">
                                    <a
                                        href="/user/login"
                                        className="btn btn-info ml-2 mr-2"
                                        style={{ fontSize: "1.2rem" }}
                                    >Login</a>
                                    <a
                                        href="/user/register"
                                        className="btn btn-outline-info ml-2"
                                        style={{ fontSize: "1.2rem" }}
                                    >Register</a>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                }
            </section>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(CalendarPage);
