import React, { Component, Fragment } from 'react';
import { Container, Nav } from 'reactstrap';

class Loader extends Component {
    render() {
        return (
            <Fragment>
                <p className="lead text-center">{this.props.text}</p>
                <Container>
                    {/* <Nav tabs className="justify-content-center mb-3"></Nav> */}
                    {/* Reference: https://mdbootstrap.com/docs/jquery/components/spinners/ */}
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </Container >
            </Fragment>
        );
    }
}

export default Loader;