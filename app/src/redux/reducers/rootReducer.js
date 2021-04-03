import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import movieReducer from './movieReducer';
import paymentReducer from './paymentReducer';
import saveMovieReducer from './saveMovieReducer';

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
    movieReducer, 
    paymentReducer,
    saveMovieReducer
});

export default rootReducer;