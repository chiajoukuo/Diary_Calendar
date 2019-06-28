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

    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user){
            this.props.getDiarys(this.props.user._id);
        }
    }

    handleAddDiary = (newDiary) => {
        this.props.addDiary(newDiary);
    }

    render() {
        const { diarys } = this.props.diary;
        const { user } = this.props;
        
        
        const { id } = this.props.match.params;

        if (diarys && user) {
            const diaryDates = diarys.map(diary => diary.date);
            if (id && diaryDates.includes(id)) {
                const item = diarys.filter(diary => diary.date === id)[0];
                return ( <Diary id={id} item={item} /> );
            }
            
            else if (!diaryDates.includes(id)) {
                const newDiary = {
                    uniqueID: id + '+' + user.name,
                    date: id, 
                    userID: user._id,
                }
                this.handleAddDiary(newDiary);
                
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
    user: state.auth.user
})

export default connect(mapStateToProps, { getDiarys, addDiary })(DiaryRender);