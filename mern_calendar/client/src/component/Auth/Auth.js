import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Auth extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <p className="lead text-center">{this.props.text}</p>
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
        );
    }
}

export default Auth;