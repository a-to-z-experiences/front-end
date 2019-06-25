// importing action type variables from actions folder to use as cases so no misspelling is involved
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  GET_EXPERIENCES_DATA_START,
  GET_EXPERIENCES_DATA_SUCCESS,
  GET_EXPERIENCES_DATA_FAILURE
} from "../actions";
// creating initialState variable, set to an object
const initialState = {
  loggingIn: false,
  registering: false,
  gettingUserData: false,
  gettingExperiencesData: false,
  userArray: [],
  availableExperiencesArray: [], 
  updating: false,
};
// creating rootReducer fn. takes in a state object, action object, and returns a new state depending on the type property within the action object
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        error: ""
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      };
    case GET_USER_DATA_START:
      return {
        ...state,
        gettingUserData: true,
        error: ""
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        gettingUserData: false,
        error: "",

      };
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        gettingUserData: false,
        error: action.payload
      };
    case GET_EXPERIENCES_DATA_START:
      return {
        ...state,
        gettingExperiencesData: true,
        error: "",
      };
    case GET_EXPERIENCES_DATA_SUCCESS:
      return {
        ...state,
        gettingExperiencesData: false,
        error: "",
        availableExperiencesArray: action.payload
      };
    case GET_EXPERIENCES_DATA_FAILURE:
      return {
        ...state,
        gettingExperiencesData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
