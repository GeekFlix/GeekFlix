import { SAVE, RENT } from '../types/saveMovieType';

const initialState = {
    rentMovie: [],
    saveMovie: []
};

const rentalReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE: 
      return {
        ...state, 
        saveMovie: action.payload
      }
      case RENT: 
      return {
        ...state, 
        saveMovie: action.payload
      }
    default:
          return state;
    };
};

export default rentalReducer;