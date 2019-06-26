import React, { Component } from "react";
// import link so you can link stuff
import { Link } from "react-router-dom";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class PostedExperiences extends Component {
  state = {};
  render() {
    return (
      <div className="posted-experiences">
        <Link to="/">
          <div className="user-home-title">Home</div>
        </Link>
        <Link to="/available-experiences">
          <div className="available-experiences-title">
            View Available Experiences
          </div>
        </Link>
        <Link to="/posted-experiences">
          <div className="posted-experiences-title">
            View My Posted Experiences
          </div>
        </Link>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}
// creating mapStateToProps fn that takes in state from reducers. We pass props to component by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    userData: state.userData,
    userId: state.userId,
    userExperiences: state.userExperiences
  };
};

// linking mapStateToProps, action creators to PostedExperiences component
export default connect(
  mapStateToProps,
  {}
)(PostedExperiences);
