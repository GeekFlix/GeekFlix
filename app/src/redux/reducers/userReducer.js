import { LOGIN, LOGOUT, REGISTER, UPDATE } from '../types/userTypes'


const initialState = {
  user: {},
<<<<<<< HEAD
  token: '', 
  // rental: []
=======
  token: '',
>>>>>>> ff59490d95939c3d1c3e1ff67ed6767a95257c09
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
        user: initialState
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
        token: action.payload.token
      }
    default:
      return state;
  };
};

export default userReducer;