import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import diaryReducer from './diaryReducer';

export default combineReducers({
    event: eventReducer,
    diary: diaryReducer
});