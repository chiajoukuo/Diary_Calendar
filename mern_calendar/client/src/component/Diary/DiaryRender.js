import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import Diary from "./Diary";
import Loader from '../Loader';
import AppNavbar from '../AppNavbar';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDiarys, addDiary } from '../../actions/diaryActions';

class DiaryRender extends Component {
    static propTypes = {
        getDiarys: PropTypes.func.isRequired,
        addDiary: PropTypes.func.isRequired,
        diary: PropTypes.object.isRequired
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.getDiarys(this.props.user._id);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            this.props.getDiarys(this.props.user._id);
        }
    }

    handleAddDiary = (newDiary) => {
        this.props.addDiary(newDiary);
    }

    loader = () => {
        const { diarys } = this.props.diary;
        const { user } = this.props;

        const { id } = this.props.match.params;

        if (diarys && user) {
            const diaryDates = diarys.map(diary => diary.date);
            if (id && diaryDates.includes(id)) {
                const item = diarys.filter(diary => diary.date === id)[0];
                return (
                <Diary id={id} item={item} history={this.props.history} />
                );
            }

            else if (!diaryDates.includes(id)) {
                const newDiary = {
                    uniqueID: id + '+' + user.name,
                    date: id,
                    userID: user._id,
                }
                this.handleAddDiary(newDiary);
                
                return (<Loader />);
            }
        }

        else {
            return (<Loader />);
        }
    }

    render() {
        return (
            <Fragment>
                <AppNavbar history={this.props.history} />
                <Container>
                    <section className="jumbotron-header mb-3 mt-2" style={{textAlign:'center'}}>
                        <h1 className="title jumbotron-heading display-4">{this.props.match.params.id}</h1>
                        <p className="lead ">Add some pictures and comments</p>
                        <p className="lead mt-n3">Click the bottons below to Zoom or Rotate</p>
                    </section>
                    {this.loader()}
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    diary: state.diary,
    user: state.auth.user
})

export default connect(mapStateToProps, { getDiarys, addDiary })(DiaryRender);