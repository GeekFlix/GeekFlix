import { SAVE } from '../types/paymentTypes';

const initialState = {
  payment: {},

};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state, 
        payment: action.payload
      }
            
    default:
      return state;
  }
};

export default paymentReducer;