import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

class Loader extends Component {
    render() {
        return (
            <Fragment>
                <p className="lead text-center">{this.props.text}</p>
                <Container>
                    {/* <Nav tabs className="justify-content-center mb-3"></Nav> */}
                    {/* Reference: https://mdbootstrap.com/docs/jquery/components/spinners/ */}
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Container >
            </Fragment>
        );
    }
}

export default Loader;