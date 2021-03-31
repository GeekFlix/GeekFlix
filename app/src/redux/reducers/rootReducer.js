import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import movieReducer from './movieReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
    movieReducer, 
    paymentReducer
});

export default rootReducer;