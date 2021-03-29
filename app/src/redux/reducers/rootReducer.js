import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
    movieReducer
});

export default rootReducer;