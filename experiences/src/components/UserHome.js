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
        {this.props.error && (
          <div className="error">{this.props.error}</div>
        )}
        {this.props.message && (
          <div className="message">{this.props.message}</div>
        )}
        <Link to="/">
          <div className="user-home-title">USER HOME</div>
        </Link>
        <div className="upcoming-experiences">UPCOMING EXPERIENCES</div>
        <button>Delete experience</button>
        <Link to="/all-experiences">
          <div className="all-experiences">See All Experiences</div>
        </Link>
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
