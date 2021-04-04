import {  STORED, UPDATECARD } from '../types/paymentTypes';

const initialState = {
  payment: {},

};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORED:
    console.log(action, 'esto es action tiu')
      return {
        ...state, 
        payment: action.payload
        
      }
    case UPDATECARD:
      return {
        ...state, 
        payment: action.payload 
      }       
    default:
      return state;
  }
};

export default paymentReducer;