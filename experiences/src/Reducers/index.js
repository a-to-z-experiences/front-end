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
  GET_USER_EXPERIENCES_DATA_START,
  GET_USER_EXPERIENCES_DATA_SUCCESS,
  GET_USER_EXPERIENCES_DATA_FAILURE,
  GET_AVAILABLE_EXPERIENCES_DATA_START,
  GET_AVAILABLE_EXPERIENCES_DATA_SUCCESS,
  GET_AVAILABLE_EXPERIENCES_DATA_FAILURE,
  POST_NEW_EXPERIENCE_DATA_START,
  POST_NEW_EXPERIENCE_DATA_SUCCESS,
  POST_NEW_EXPERIENCE_DATA_FAILURE,
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
  gettingUserExperiencesData: false,
  gettingExperiencesData: false,
  postingNewExperienceData: false,
  gettingSpecificExperienceData: false,
  updatingSpecificExperienceData: false,
  deletingSpecificExperienceData: false,
  userData: {},
  userExperiences: [],
  userId: -1,
  availableExperiencesArray: [],
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
        message: "",
        userData: action.userDataObject,
        userExperiences: action.userExperiencesArray
      };
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        gettingUserData: false,
        error: action.error,
        message: ""
      };
    case GET_USER_EXPERIENCES_DATA_START:
      return {
        ...state,
        gettingUserExperiencesData: true,
        error: "",
        message: ""
      };
    case GET_USER_EXPERIENCES_DATA_SUCCESS:
      return {
        ...state,
        gettingUserExperiencesData: false,
        error: "",
        message: "",
        userExperiencesDataArray: action.payload
      };
    case GET_USER_EXPERIENCES_DATA_FAILURE:
      return {
        ...state,
        gettingUserExperiencesData: false,
        error: action.error,
        message: "",
        userExperiencesDataArray: action.payload
      };
    case GET_AVAILABLE_EXPERIENCES_DATA_START:
      return {
        ...state,
        gettingExperiencesData: true,
        error: "",
        message: "",
        specificExperienceObject: {}
      };
    case GET_AVAILABLE_EXPERIENCES_DATA_SUCCESS:
      return {
        ...state,
        gettingExperiencesData: false,
        error: "",
        message: "",
        availableExperiencesArray: action.availableExperiencesArray
      };
    case GET_AVAILABLE_EXPERIENCES_DATA_FAILURE:
      return {
        ...state,
        gettingExperiencesData: false,
        error: action.error,
        message: ""
      };
    case POST_NEW_EXPERIENCE_DATA_START:
      return {
        ...state,
        postingNewExperienceData: true,
        error: "",
        message: action.message
      };
    case POST_NEW_EXPERIENCE_DATA_SUCCESS:
      return {
        ...state,
        postingNewExperienceData: false,
        error: "",
        message: "",
        userExperiences: action.updatedExperiences
      };
    case POST_NEW_EXPERIENCE_DATA_FAILURE:
      return {
        ...state,
        postingNewExperienceData: true,
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
    case UPDATE_SPECIFIC_EXPERIENCE_DATA_START:
      return {
        ...state,
        error: "",
        message: "",
        updatingSpecificExperienceData: true
      };
    case UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        message: action.message,
        updatingSpecificExperienceData: false,
        userExperiences: action.updatedExperiences
      };
    case UPDATE_SPECIFIC_EXPERIENCE_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        message: "",
        updatingSpecificExperienceData: false
      };
    case DELETE_SPECIFIC_EXPERIENCE_DATA_START:
      return {
        ...state,
        error: "",
        message: "",
        deletingSpecificExperienceData: true
      };
    case DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        message: action.message,
        deletingSpecificExperienceData: false,
        userExperiences: action.updatedExperiences
      };
    case DELETE_SPECIFIC_EXPERIENCE_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        message: "",
        deletingSpecificExperienceData: false
      };
    default:
      return state;
  }
};

export default rootReducer;
