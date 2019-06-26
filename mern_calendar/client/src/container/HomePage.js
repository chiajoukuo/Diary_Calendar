import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

export default class HomePage extends Component {
    render() {
        return (
            <section className="jumbotron-header mb-3 text-center">
                <Container style={{marginTop: "4rem"}}>
                    <Row>
                        <Col>
                            <h1 className="jumbotron-heading display-4">Welcome to Diary Calender App</h1>
                            <p className="lead">please LOGIN or REGISTER below</p>
                            <p>
                                <a 
                                    href="/user/login"
                                    className="btn btn-info ml-2 mr-2"
                                    style={{fontSize: "1.2rem"}}
                                >Login</a>
                                <a 
                                    href="/user/register"
                                    className="btn btn-outline-info ml-2"
                                    style={{fontSize: "1.2rem"}}
                                >Register</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}