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
      console.log("RESPONSE: ", response);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(error => {
      console.log("ERROR: ", error);
      dispatch({ type: LOGIN_FAILURE, payload: "Username or Password is incorrect" });
    });
};

// creating register action creator
export const register = () => dispatch => {};

// creating getUserData action creator
export const getUserData = () => dispatch => {};

// creating getExperiencesData action creator
export const getExperiencesData = () => dispatch => {};
