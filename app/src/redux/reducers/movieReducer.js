import {SHOW} from '../types/movieTypes.js';

const initialState = {
    movie: []
};

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW :
            return{
                ...state,
                movie: action.payload.result
            }
        
        default:
            return state
    }
};

export default movieReducer;