import {LOGOUT,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT_FAILURE, 
  LOGOUT_SUCCESS,RESET_LOGIN_STATE} from '../global/actions.name';

const initialState = {
  user: {},
  is_logged_in: false,
  is_loading: false,
  lastError: undefined,
  hasError: false
};

export default (state = initialState, action ) => {
  
  switch (action.type) {
    case LOGIN_REQUEST:
      return{
        ...state,
        is_loading: true  
      }
    
    case LOGIN_FAILURE:
      return{
        ...state,
        is_loading: false,
        hasError: true,
        lastError: action.payload  
    }

    case LOGIN_SUCCESS:
      return{
        ...state,
        is_loading: false,
        hasError: false,
        lastError: undefined,
        is_logged_in: true,
        user: action.user
    }

    case LOGOUT:
      return {
        ...state,
        is_loading: true,
      }

    case LOGOUT_FAILURE:
      return{
        ...state,        
        hasError: true,
        lastError: action.payload,
        is_loading: false,
    }    
    
    case LOGOUT_SUCCESS:
      return state;
    
    case RESET_LOGIN_STATE:
      return {
        ...state,        
        hasError: false,
        lastError: null,
        is_loading: false,
      };

    default:
      return state;
  }
}