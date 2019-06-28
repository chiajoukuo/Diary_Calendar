import React, { Component, Fragment } from "react";
import { Container, Row, Col} from 'reactstrap';
import AppNavbar from '../component/AppNavbar';
import  { logout } from  '../actions/authActions';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class HomePage extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
    }

    render() {
        return (
            <Fragment>
                <AppNavbar history={this.props.history} />
                <section className="jumbotron-header mb-3 text-center">
                    <Container style={{ marginTop: "4rem" }}>
                        <Row>
                            <Col>
                                <h1 className="title2 jumbotron-heading display-4">Welcome to Diary Calender App</h1>
                                {this.props.isAuthenticated ?
                                <div>
                                    <p>
                                        Have a Fun Time Today!
                                    </p>                                    
                                </div>
                                : 
                                <div>                                 
                                <p className="lead">please LOGIN or REGISTER below</p>
                                <p>
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
                                </div>                               
                                }                              
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(HomePage);