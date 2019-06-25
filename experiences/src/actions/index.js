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

// creating login action creator
export const login = () => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://atoz.herokuapp.com/login")
    .then(response => {
      console.log("LOGIN_SUCCESS_RESPONSE: ", response);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(error => {
      console.log("LOGIN_FAILURE_RROR: ", error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Email or Password is incorrect"
      });
    });
};

// creating register action creator
export const register = () => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post("https://atoz.herokuapp.com/register") // or /users?
    .then(response => {
      console.log("REGISTER_SUCCESS_RESPONSE: ", response);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: REGISTER_SUCCESS });
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
    .get(`https://atoz.herokuapp.com/users/${id}`)
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
    .get("https://atoz.herokuapp.com/experiences")
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
