import { SHOW, SEARCH } from '../types/movieTypes.js';

const initialState = {
    movie: [],
    query: []
};

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW:
            return{
                ...state,
                movie: action.payload.result
            }
        case SEARCH : 
            return {
                ...state,
                query : action.payload
            }    
        
        default:
            return state
    }
};

export default movieReducer;