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

// creating getUserData variables for action types
export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

// creating getUserExperiencesData variables for action types
export const GET_USER_RSVPED_EXPERIENCES_DATA_START =
  "GET_USER_RSVPED_EXPERIENCES_DATA_START";
export const GET_USER_RSVPED_EXPERIENCES_DATA_SUCCESS =
  "GET_USER_RSVPED_EXPERIENCES_DATA_SUCCESS";
export const GET_USER_RSVPED_EXPERIENCES_DATA_FAILURE =
  "GET_USER_RSVPED_EXPERIENCES_DATA_FAILURE";

// creating getUserHostingExperiencesData variables for action types
export const GET_USER_HOSTING_EXPERIENCES_DATA_START =
  "GET_USER_HOSTING_EXPERIENCES_DATA_START";
export const GET_USER_HOSTING_EXPERIENCES_DATA_SUCCESS =
  "GET_USER_HOSTING_EXPERIENCES_DATA_SUCCESS";
export const GET_USER_HOSTING_EXPERIENCES_DATA_FAILURE =
  "GET_USER_HOSTING_EXPERIENCES_DATA_FAILURE";

// creating getExperiencesData variables for action types
export const GET_AVAILABLE_EXPERIENCES_DATA_START =
  "GET_AVAILABLE_EXPERIENCES_DATA_START";
export const GET_AVAILABLE_EXPERIENCES_DATA_SUCCESS =
  "GET_AVAILABLE_EXPERIENCES_DATA_SUCCESS";
export const GET_AVAILABLE_EXPERIENCES_DATA_FAILURE =
  "GET_AVAILABLE_EXPERIENCES_DATA_FAILURE";

// creating POST_NEW_EXPERIENCES variables for action types
export const POST_NEW_EXPERIENCE_DATA_START = "POST_NEW_EXPERIENCE_DATA_START";
export const POST_NEW_EXPERIENCE_DATA_SUCCESS =
  "POST_NEW_EXPERIENCE_DATA_SUCCESS";
export const POST_NEW_EXPERIENCE_DATA_FAILURE =
  "POST_NEW_EXPERIENCE_DATA_FAILURE";

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

// creating RSVP to Specific Experience
export const RSVP_SPECIFIC_EXPERIENCE_START = "RSVP_SPECIFIC_EXPERIENCE_START";
export const RSVP_SPECIFIC_EXPERIENCE_SUCCESS =
  "RSVP_SPECIFIC_EXPERIENCE_SUCCESS";
export const RSVP_SPECIFIC_EXPERIENCE_FAILURE =
  "RSVP_SPECIFIC_EXPERIENCE_FAILURE";

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
      localStorage.setItem("user_id", response.data.user.id);
      dispatch({
        type: LOGIN_SUCCESS,
        message: response.data.message,
        userData: response.data.user
      });
    })
    .catch(error => {
      console.log("LOGIN_FAILURE_ERROR: ", error);
      dispatch({
        type: LOGIN_FAILURE,
        error: "Username or Password is incorrect"
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
      dispatch({ type: REGISTER_SUCCESS, message: response.data.message });
    })
    .catch(error => {
      console.log("REGISTER_FAILURE_ERROR: ", error);
      dispatch({
        type: REGISTER_FAILURE,
        error: "Email or Password is taken or invalid"
      });
    });
};

// creating getUserData action creator, takes in ID of user
export const getUserData = id => dispatch => {
  dispatch({ type: GET_USER_DATA_START });
  // interpolating ID value because it's a number, and the URL we get from has to use a string value
  axios
    .get(`https://atoz-backend.herokuapp.com/api/users/${id}`)
    .then(response => {
      console.log("GET_USER_DATA_SUCCESS: ", response);
      dispatch({
        type: GET_USER_DATA_START,
        userDataObject: response.data,
        userExperiencesArray: response.data.experiences
      });
    })
    .catch(error => {
      console.log("GET_USER_DATA_FAILURE: ", error);
      dispatch({ type: GET_USER_DATA_FAILURE, error: error.message });
    });
};

// creating getUserRSVPExperiences action creator, takes in ID of user
export const getUserRsvpedExperiencesData = userId => dispatch => {
  dispatch({ type: GET_USER_RSVPED_EXPERIENCES_DATA_START });
  // interpolating ID value because it's a number, and the URL we get from has to use a string value
  axios
    .get(
      `https://atoz-backend.herokuapp.com/api/users/${userId}/experiences_attending`
    )
    .then(response => {
      console.log("GET_USER_RSVPED_DATA_SUCCESS: ", response);
      dispatch({
        type: GET_USER_RSVPED_EXPERIENCES_DATA_SUCCESS,
        userRsvpedExperiencesDataArray: response.data
      });
    })
    .catch(error => {
      console.log("GET_USER_RSVPED_DATA_FAILURE: ", error);
      dispatch({
        type: GET_USER_RSVPED_EXPERIENCES_DATA_FAILURE,
        error: error.message
      });
    });
};

// creating getUserHostingExperiences action creator, takes in ID of user
export const getUserHostingExperiencesData = userId => dispatch => {
  dispatch({ type: GET_USER_HOSTING_EXPERIENCES_DATA_START });
  // interpolating ID value because it's a number, and the URL we get from has to use a string value
  axios
    .get(
      `https://atoz-backend.herokuapp.com/api/users/${userId}/host_experiences`
    )
    .then(response => {
      console.log("GET_USER_HOSTING_DATA_SUCCESS: ", response);
      dispatch({
        type: GET_USER_HOSTING_EXPERIENCES_DATA_SUCCESS,
        userHostingExperiencesDataArray: response.data.experiences
      });
    })
    .catch(error => {
      console.log("GET_USER_HOSTING_DATA_FAILURE: ", error);
      dispatch({
        type: GET_USER_HOSTING_EXPERIENCES_DATA_FAILURE,
        error: error.message
      });
    });
};

// creating getAVAILABLEExperiencesData action creator
export const getAvailableExperiencesData = () => dispatch => {
  dispatch({ type: GET_AVAILABLE_EXPERIENCES_DATA_START });
  // get cAVAILABLE to /experiences endpoint
  axios
    .get("https://atoz-backend.herokuapp.com/api/experiences")
    .then(response => {
      console.log("GET_AVAILABLE_EXPERIENCES_DATA_SUCCESS: ", response);
      dispatch({
        type: GET_AVAILABLE_EXPERIENCES_DATA_SUCCESS,
        availableExperiencesArray: response.data.experiences
      });
    })
    .catch(error => {
      console.log("GET_AVAILABLE_EXPERIENCES_FAILURE_ERROR: ", error);
      dispatch({
        type: GET_AVAILABLE_EXPERIENCES_DATA_FAILURE,
        error: error.message
      });
    });
};

// creating POSTNewExperience action creator
export const postNewExperience = newExperienceObject => dispatch => {
  dispatch({ type: POST_NEW_EXPERIENCE_DATA_START });
  // post to /experiences endpoint
  return axios
    .post(
      "https://atoz-backend.herokuapp.com/api/experiences",
      newExperienceObject
    )
    .then(response => {
      console.log("POST_NEW_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: POST_NEW_EXPERIENCE_DATA_SUCCESS,
        updatedExperiences: response.experiences,
        message: response.message
      });
    })
    .catch(error => {
      console.log("POST_NEW_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: POST_NEW_EXPERIENCE_DATA_FAILURE,
        error: error.message
      });
    });
};

// creating getSpecificExperience action creator
export const getSpecificExperience = experienceID => dispatch => {
  dispatch({ type: GET_SPECIFIC_EXPERIENCE_DATA_START });
  // get cAVAILABLE to /experiences endpoint
  axios
    .get(`https://atoz-backend.herokuapp.com/api/experiences/${experienceID}`)
    .then(response => {
      console.log("GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: GET_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
        specificExperience: response.data
      });
    })
    .catch(error => {
      console.log("GET_SPECIFIC_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: GET_SPECIFIC_EXPERIENCE_DATA_FAILURE,
        error: error.message
      });
    });
};

// creating rsvpSpecificExperience action creator
export const rsvpSpecificExperience = (userId, experienceId) => dispatch => {
  dispatch({ type: RSVP_SPECIFIC_EXPERIENCE_START });
  return axios
    .post("https://atoz-backend.herokuapp.com/api/experiences/attend", {
      user_id: userId,
      experience_id: experienceId
    })
    .then(response => {
      // getUserRsvpedExperiencesData(localStorage.getItem("user_id"));
      console.log("RSVP_SPECIFIC_EXPERIENCE_SUCCESS", response);
      dispatch({ type: RSVP_SPECIFIC_EXPERIENCE_SUCCESS });
    })
    .catch(error => {
      console.log("RSVP_SPECIFIC_EXPERIENCE_FAILURE", error);
      dispatch({ type: RSVP_SPECIFIC_EXPERIENCE_FAILURE });
    });
};

// creating updateSpecificExperience action creator
export const updateSpecificExperience = (
  experienceID,
  updatedExperience
) => dispatch => {
  dispatch({ type: UPDATE_SPECIFIC_EXPERIENCE_DATA_START });
  // get cAVAILABLE to /experiences endpoint
  return axios
    .put(
      `https://atoz-backend.herokuapp.com/api/experiences/${experienceID}`,
      updatedExperience
    )
    .then(response => {
      console.log("UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: UPDATE_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
        // i think you get AVAILABLE the updatedExperiences back
        updatedExperiences: response.experiences,
        message: response.message
      });
    })
    .catch(error => {
      console.log("UPDATE_SPECIFIC_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: UPDATE_SPECIFIC_EXPERIENCE_DATA_FAILURE,
        error: error.message
      });
    });
};

// creating deleteSpecificExperience action creator
export const deleteSpecificExperience = experienceID => dispatch => {
  dispatch({ type: DELETE_SPECIFIC_EXPERIENCE_DATA_START });
  // get cAVAILABLE to /experiences endpoint
  return axios
    .delete(
      `https://atoz-backend.herokuapp.com/api/experiences/${experienceID}`
    )
    .then(response => {
      console.log("DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS: ", response);
      dispatch({
        type: DELETE_SPECIFIC_EXPERIENCE_DATA_SUCCESS,
        // I think you get the updated experiences array back
        updatedExperiences: response.experiences
      });
    })
    .catch(error => {
      console.log("DELETE_SPECIFIC_EXPERIENCE_FAILURE_ERROR: ", error);
      dispatch({
        type: DELETE_SPECIFIC_EXPERIENCE_DATA_FAILURE,
        error: error.message
      });
    });
};
