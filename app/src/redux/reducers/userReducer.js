import { LOGIN, LOGOUT, REGISTER, SHOW, RENTALS } from '../types/userTypes'

const initialState = {
  user: {},
  token: ''
};

const  userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.client,
        token: action.payload.token
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
      case SHOW: 
      return {
        ...state, 
        user: action.payload
      }
      case RENTALS: 
      return {
        ...state, 
        user: action.payload
      }
            
    default:
      return state;
  }
};

export default userReducer;