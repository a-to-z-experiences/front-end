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
  GET_ALL_EXPERIENCES_DATA_FAILURE,
  ADD_NEW_EXPERIENCE_DATA_START,
  ADD_NEW_EXPERIENCE_DATA_SUCCESS,
  ADD_NEW_EXPERIENCE_DATA_FAILURE,
  GET_SPECIFIC_EXPERIENCE_DATA_START,
  GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
  GET_SPECIFIC_EXPERIENCE_DATA_FAILURE,
  UPDATE_SPECIFIC_EXPERIENCE_DATA_START,
  UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
  UPDATE_SPECIFIC_EXPERIENCE_DATA_FAILURE,
  DELETE_SPECIFIC_EXPERIENCE_DATA_START,
  DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
  DELETE_SPECIFIC_EXPERIENCE_DATA_FAILURE
} from "../actions";
// creating initialState variable, set to an object
const initialState = {
  loggingIn: false,
  registering: false,
  gettingUserData: false,
  gettingExperiencesData: false,
  addingNewExperienceData: false,
  gettingSpecificExperienceData: false,
  userData: {},
  userId: -1,
  allExperiencesArray: [],
  specificExperienceObject: {},
  specificExperienceId: -1,
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
        message: "",
        allExperiencesArray: action.allExperiencesArray
      };
    case GET_ALL_EXPERIENCES_DATA_FAILURE:
      return {
        ...state,
        gettingExperiencesData: false,
        error: action.error,
        message: ""
      };
    case ADD_NEW_EXPERIENCE_DATA_START:
      return {
        ...state,
        addingNewExperienceData: true,
        error: "",
        message: action.message
      };
    case ADD_NEW_EXPERIENCE_DATA_SUCCESS:
      return {
        ...state,
        addingNewExperienceData: false,
        error: "",
        message: "",
        userExperiences: action.updatedExperiences
      };
    case ADD_NEW_EXPERIENCE_DATA_FAILURE:
      return {
        ...state,
        addingNewExperienceData: true,
        error: action.error,
        message: ""
      };
    case GET_SPECIFIC_EXPERIENCE_DATA_START:
      return {
        ...state,
        gettingSpecificExperienceData: true,
        error: "",
        message: action.message
      };
    case GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS:
      return {
        ...state,
        gettingSpecificExperienceData: false,
        error: "",
        message: "",
        specificExperienceObject: action.specificExperience,
        specificExperienceId: action.specificExperience.id
      };
    case GET_SPECIFIC_EXPERIENCE_DATA_FAILURE:
      return {
        ...state,
        gettingSpecificExperienceData: true,
        error: action.error,
        message: ""
      };
    default:
      return state;
  }
};

export default rootReducer;
