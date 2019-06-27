import React, { Component } from "react";
// import getUserData action creator
import { getUserData } from "../actions";
// importing link so I can link divs
import { Link } from "react-router-dom";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class UserHome extends Component {
  state = {};
  componentDidMount() {
    this.props.getUserData(this.props.userId);
  }
  render() {
    return (
      <div className="user-home">
        {this.props.error && <div className="error">{this.props.error}</div>}
        {this.props.message && (
          <div className="message">{this.props.message}</div>
        )}
        <Link to="/">
          <div className="user-home-title">Home</div>
        </Link>
        <Link to="/available-experiences">
          <div className="available-experiences-title">
            View Available Experiences
          </div>
        </Link>
        <Link to="/hosting-experiences">
          <div className="hosting-experiences-title">
            Experiences I'm Hosting
          </div>
        </Link>
        <Link to="/host-an-experience">
          <div className="host-an-experience-title">Host an experience</div>
        </Link>
        <div className="upcoming-experiences-title">
          My Upcoming Experiences
        </div>
        <button>Remove experience</button>
      </div>
    );
  }
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to UserHome by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    userData: state.userData,
    userId: state.userId,
    userExperiences: state.userExperiences
  };
};
// linking mapStateToProps, action creators to UserHome component
export default connect(
  mapStateToProps,
  { getUserData }
)(UserHome);
