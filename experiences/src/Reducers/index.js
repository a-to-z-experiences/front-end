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
  GET_ALL_EXPERIENCES_DATA_START,
  GET_ALL_EXPERIENCES_DATA_SUCCESS,
  GET_ALL_EXPERIENCES_DATA_FAILURE
} from "../actions";
// creating initialState variable, set to an object
const initialState = {
  loggingIn: false,
  registering: false,
  gettingUserData: false,
  gettingExperiencesData: false,
  userData: {},
  userId: -1,
  allExperiencesArray: [],
  updating: false,
  message: ""
};
// creating rootReducer fn. takes in a state object, action object, and returns a new state depending on the type property within the action object
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: "",
        message: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: "",
        message: action.message,
        userData: action.userData,
        userId: action.userData.id
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.error,
        message: ""
      };
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: "",
        message: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        error: "",
        message: action.message
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.error,
        message: ""
      };
    case GET_USER_DATA_START:
      return {
        ...state,
        gettingUserData: true,
        error: "",
        message: ""
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        gettingUserData: false,
        error: "",
        message: ""
      };
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        gettingUserData: false,
        error: action.error,
        message: ""
      };
    case GET_ALL_EXPERIENCES_DATA_START:
      return {
        ...state,
        gettingExperiencesData: true,
        error: "",
        message: ""
      };
    case GET_ALL_EXPERIENCES_DATA_SUCCESS:
      return {
        ...state,
        gettingExperiencesData: false,
        error: "",
        allExperiencesArray: action.allExperiencesArray,
        message: ""
      };
    case GET_ALL_EXPERIENCES_DATA_FAILURE:
      return {
        ...state,
        gettingExperiencesData: false,
        error: action.error,
        message: ""
      };
    default:
      return state;
  }
};

export default rootReducer;
