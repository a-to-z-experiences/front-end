import React, { Component } from "react";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class SpecificExperience extends Component {
  state = {};
  render() {
    return <div />;
  }
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to SpecificExperience by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    userData: state.userData,
    userId: state.userId,
    availableExperiencesArray: state.AvailableExperiences
  };
};
// linking mapStateToProps, action creators to SpecificExperience component
export default connect(
  mapStateToProps,
  {}
)(SpecificExperience);
