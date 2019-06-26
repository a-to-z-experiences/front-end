// importing axios so we can post to the login url when a user clicks login, or post with register? don't know
import axios from "axios";
// creating login variables for action types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// creating register variables for action types
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// creating getData variables for action types
export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

// creating getExperiencesData variables for action types
export const GET_EXPERIENCES_DATA_START = "GET_EXPERIENCES_DATA_START";
export const GET_EXPERIENCES_DATA_SUCCESS = "GET_EXPERIENCES_DATA_SUCCESS";
export const GET_EXPERIENCES_DATA_FAILURE = "GET_EXPERIENCES_DATA_FAILURE";

// creating ADD_NEW_EXPERIENCES variables for action types
export const ADD_NEW_EXPERIENCE_DATA_START = "ADD_NEW_EXPERIENCE_DATA_START";
export const ADD_NEW_EXPERIENCE_DATA_SUCCESS =
  "ADD_NEW_EXPERIENCE_DATA_SUCCESS";
export const ADD_NEW_EXPERIENCE_DATA_FAILURE =
  "ADD_NEW_EXPERIENCE_DATA_FAILURE";

// creating GET_SPECIFIC_EXPERIENCES variables for action types
export const GET_SPECIFIC_EXPERIENCE_DATA_START =
  "GET_SPECIFIC_EXPERIENCE_DATA_START";
export const GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS =
  "GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS";
export const GET_SPECIFIC_EXPERIENCE_DATA_FAILURE =
  "GET_SPECIFIC_EXPERIENCE_DATA_FAILURE";

// creating GET_SPECIFIC_EXPERIENCES variables for action types
export const UPDATE_SPECIFIC_EXPERIENCE_DATA_START =
  "UPDATE_SPECIFIC_EXPERIENCE_DATA_START";
export const UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS =
  "UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS";
export const UPDATE_SPECIFIC_EXPERIENCE_DATA_FAILURE =
  "UPDATE_SPECIFIC_EXPERIENCE_DATA_FAILURE";

// creating GET_SPECIFIC_EXPERIENCES variables for action types
export const DELETE_SPECIFIC_EXPERIENCE_DATA_START =
  "DELETE_SPECIFIC_EXPERIENCE_DATA_START";
export const DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS =
  "DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS";
export const DELETE_SPECIFIC_EXPERIENCE_DATA_FAILURE =
  "DELETE_SPECIFIC_EXPERIENCE_DATA_FAILURE";

// creating login action creator
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://atoz-backend.herokuapp.com/api/login", credentials)
    .then(response => {
      console.log("LOGIN_SUCCESS_RESPONSE: ", response);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(error => {
      console.log("LOGIN_FAILURE_ERROR: ", error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Username or Password is incorrect"
      });
    });
};

// creating register/add new user to user url action creator
export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post("https://atoz-backend.herokuapp.com/api/register", credentials) // or /users?
    .then(response => {
      console.log("REGISTER_SUCCESS_RESPONSE: ", response);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data.message });
    })
    .catch(error => {
      console.log("REGISTER_FAILURE_ERROR: ", error);
      dispatch({
        type: REGISTER_FAILURE,
        payload: "Email or Password is taken or invalid"
      });
    });
};

// creating getUserData action creator, takes in ID of user
export const getUserData = id => dispatch => {
  dispatch({ type: GET_USER_DATA_START });
  // interpolating ID value because it's a number, and the URL we get from has to use a string value
  axios
    .get(`https://atoz-backend.herokuapp.com/users/${id}`)
    .then(response => {
      console.log("GET_USER_DATA_SUCCESS: ", response);
      dispatch({ type: GET_USER_DATA_START, payload: response.data });
    })
    .catch(error => {
      console.log("GET_USER_DATA_FAILURE: ", error);
      dispatch({ type: GET_USER_DATA_FAILURE, payload: error.message });
    });
};

// creating getExperiencesData action creator
export const getExperiencesData = () => dispatch => {
  dispatch({ type: GET_EXPERIENCES_DATA_START });
  // get call to /experiences endpoint
  axios
    .get("https://atoz-backend.herokuapp.com/experiences")
    .then(response => {
      console.log("GET_EXPERIENCES_DATA_SUCCESS: ", response);
      dispatch({
        type: GET_EXPERIENCES_DATA_SUCCESS,
        payload: response.experiences
      });
    })
    .catch(error => {
      console.log("GET_EXPERIENCES_FAILURE_ERROR: ", error);
      dispatch({ type: GET_EXPERIENCES_DATA_FAILURE, payload: error.message });
    });
};

// creating getSpecificExperience action creator
export const getSpecificExperience = experienceID => dispatch => {
  dispatch({ type: GET_SPECIFIC_EXPERIENCE_DATA_START });
  // get call to /experiences endpoint
  axios
    .get(`https://atoz-backend.herokuapp.com/experiences/${experienceID}`)
    .then(response => {
      console.log("GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
        payload: response.experiences
      });
    })
    .catch(error => {
      console.log("GET_SPECIFIC_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: GET_SPECIFIC_EXPERIENCE_DATA_FAILURE,
        payload: error.message
      });
    });
};

// creating updateSpecificExperience action creator
export const updateSpecificExperience = experienceID => dispatch => {
  dispatch({ type: UPDATE_SPECIFIC_EXPERIENCE_DATA_START });
  // get call to /experiences endpoint
  axios
    .put(`https://atoz-backend.herokuapp.com/experiences/${experienceID}`)
    .then(response => {
      console.log("UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
        payload: response.experiences
      });
    })
    .catch(error => {
      console.log("UPDATE_SPECIFIC_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: UPDATE_SPECIFIC_EXPERIENCE_DATA_FAILURE,
        payload: error.message
      });
    });
};

// creating deleteSpecificExperience action creator
export const deleteSpecificExperience = experienceID => dispatch => {
  dispatch({ type: DELETE_SPECIFIC_EXPERIENCE_DATA_START });
  // get call to /experiences endpoint
  axios
    .delete(`https://atoz-backend.herokuapp.com/experiences/${experienceID}`)
    .then(response => {
      console.log("DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
        payload: response.experiences
      });
    })
    .catch(error => {
      console.log("DELETE_SPECIFIC_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: DELETE_SPECIFIC_EXPERIENCE_DATA_FAILURE,
        payload: error.message
      });
    });
};

// creating addNewExperience action creator
export const addNewExperience = newExperienceObject => dispatch => {
  dispatch({ type: ADD_NEW_EXPERIENCE_DATA_START });
  // get call to /experiences endpoint
  axios
    .post("https://atoz-backend.herokuapp.com/experiences", newExperienceObject)
    .then(response => {
      console.log("ADD_NEW_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: ADD_NEW_EXPERIENCE_DATA_SUCCESS,
        payload: response.experiences
      });
    })
    .catch(error => {
      console.log("ADD_NEW_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: ADD_NEW_EXPERIENCE_DATA_FAILURE,
        payload: error.message
      });
    });
};
