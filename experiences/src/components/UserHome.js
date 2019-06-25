import React, { Component } from "react";
// import getUserData action creator
import { getUserData } from "../actions";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class UserHome extends Component {
  render() {
    return (
      <div className="user-home">
        USER HOME
        <div className="upcoming-experiences">UPCOMING EXPERIENCES</div>
      </div>
    );
  }
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to UserHome by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    availableExperiencesArray: state.AvailableExperiences
  };
};
// linking mapStateToProps, action creators to UserHome component
export default connect(
  mapStateToProps,
  { getUserData }
)(UserHome);
