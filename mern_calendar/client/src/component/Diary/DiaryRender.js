import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Diary from "./Diary";
import { getDiarys } from '../../actions/diaryActions';

class DiaryRender extends Component {
    static propTypes = {
        getDiarys: PropTypes.func.isRequired,
        //addDiary: PropTypes.func.isRequired,
        diary: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDiarys();
    }

    render() {
        const { diarys } = this.props.diary;
        console.log("Diary: ", this.props.diary)
        const diaryDates = diarys.map(diary => diary.date);
        const { id } = this.props.match.params;

        if (id && diaryDates.includes(id)) {
            return ( <Diary id={id} item={diarys.filter(diary => diary.date === id)[0]} /> );
        }

        else {
            // const newDiary = {
            //     date: id
            // }
            // this.props.addDiary(newDiary);
            // this.props.getDiarys();
            return (
                <div>Error: Diary #{id} not found</div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    diary: state.diary
})

export default connect(mapStateToProps, { getDiarys })(DiaryRender);