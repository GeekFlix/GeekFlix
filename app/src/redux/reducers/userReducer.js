import { LOGIN, LOGOUT, REGISTER, UPDATE, RENTALS } from '../types/userTypes'


const initialState = {
  user: {},
  token: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
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
      case RENTALS: 
      return {
        ...state, 
        user: action.payload 
      }
    case UPDATE:
      return {
        ...state, 
        user: action.payload, 
        token: action.payload.token
      }
            
    default:
      return state;
  }
};

export default userReducer;