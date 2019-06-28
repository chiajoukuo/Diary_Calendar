import React, { Component, Fragment } from 'react';
import { Container, Row } from 'reactstrap';

import AppNavbar from '../component/AppNavbar';
import CommentModal from '../component/CommentModal';
import ImageModal from '../component/ImageModal';
import DiaryModal from '../component/DiaryModal';
import ImageUpdateModal from '../component/ImageUpdateModal';

class DiaryPage extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar history={this.props.history} />
                <section className="jumbotron-header mb-3 mt-2">
                    <h1 className="title jumbotron-heading display-4 text-center">Diary Page</h1>
                    <p className="lead text-center">Just a TEST Diary PAGE</p>
                    <Container>
                        <Row>
                            <DiaryModal />
                            <CommentModal />
                            <ImageModal />
                            <ImageUpdateModal />
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default DiaryPage;