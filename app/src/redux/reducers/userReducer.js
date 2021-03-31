import { LOGIN, LOGOUT, REGISTER, UPDATE } from '../types/userTypes'

const initialState = {
  user: {},
  token: '', 
  payment: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token, 
        payment: action.payload.payment
      }
    case LOGOUT:
      return {
        ...state,
        user: initialState,
      }
    case REGISTER: 
      return {
        ...state, 
        user: action.payload
      }
    case UPDATE:
      return {
        ...state, 
        user: action.payload, 
        token: action.payload.token, 
        payment: action.payload
      }
            
    default:
      return state;
  }
};

export default userReducer;