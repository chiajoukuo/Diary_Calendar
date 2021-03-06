import { 
    GET_EVENTS, 
    ADD_EVENT, 
    UPDATE_EVENT,
    DELETE_EVENT, 
    EVENTS_LOADING } from '../actions/types';

const initialState = {
    events: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            };
        case ADD_EVENT:
            return {
                ...state,
                events: [action.payload, ...state.events]
            };
        case UPDATE_EVENT:
            return {
                ...state,
                events: state.events.map(event => {
                    if (event._id === action.payload._id) {
                        return { ...event, ...action.payload };
                    }
                    return event;
                })
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event._id !== action.payload)
            };  
        case EVENTS_LOADING:
            return {
                ...state,
                loading: true
            }; 
        default:
            return state;
    }
};