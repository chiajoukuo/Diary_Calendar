import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Diary from "./Diary";
import { getDiarys, addDiary } from '../../actions/diaryActions';

class DiaryRender extends Component {
    static propTypes = {
        getDiarys: PropTypes.func.isRequired,
        addDiary: PropTypes.func.isRequired,
        diary: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDiarys();
    }

    handleAddDiary = (newDiary) => {
        this.props.addDiary(newDiary);
    }

    render() {
        const { diarys } = this.props.diary;
        const { user } = this.props.auth;
        
        
        const { id } = this.props.match.params;

        if (diarys && user) {
            const diaryDates = diarys.filter(diary => diary.userID === user._id).map(diary => diary.date);
            if (id && diaryDates.includes(id)) {
                return ( <Diary id={id} item={diarys.filter(diary => diary.date === id)[0]} /> );
            }
            
            else if (!diaryDates.includes(id)) {
                const newDiary = {
                    date: id, 
                    userID: user._id,
                    uniqueID: id + '+' + user.name
                }
                this.handleAddDiary(newDiary);
                console.log(newDiary)
                return ( <div>Error: Diary #{id} not found</div> );
            }
        }

        else {
            return (
                <div>Error: Diary #{id} not found</div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    diary: state.diary,
    auth: state.auth
})

export default connect(mapStateToProps, { getDiarys, addDiary })(DiaryRender);