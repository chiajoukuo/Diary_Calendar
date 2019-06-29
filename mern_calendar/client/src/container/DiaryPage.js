import React, { Component, Fragment } from 'react';
import { Container, Row } from 'reactstrap';

import AppNavbar from '../component/AppNavbar';
import Loader from '../component/Loader';
import Auth from '../component/Auth/Auth';
import DiaryGallery from '../component/Diary/DiaryGallery';
import CommentModal from '../component/CommentModal';
import ImageModal from '../component/ImageModal';
import DiaryModal from '../component/DiaryModal';
import ImageUpdateModal from '../component/ImageUpdateModal';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DiaryPage extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        isLoading: PropTypes.bool,
    }

    diaries = () => {
        return (
            <Fragment>
                <p className="lead text-center">Manage your existing diaries</p>
                <Container>
                    <Row>
                        <DiaryModal />
                        <CommentModal />
                        <ImageModal />
                        <ImageUpdateModal />
                    </Row>
                    <Row>
                        <DiaryGallery />
                    </Row>
                </Container>
            </Fragment>
        );
    }

    render() {
        return (
            <Fragment>
                <AppNavbar history={this.props.history} />
                <section className="jumbotron-header mb-3 mt-2">
                    <h1 className="title jumbotron-heading display-4 text-center">Diary Gallery</h1>
                    {this.props.isAuthenticated ? this.diaries()
                        : this.props.isLoading ? <Loader text="Manage your existing diaries" /> : <Auth text="please LOGIN to Manage your Diaries" />}
                </section>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, null)(DiaryPage);