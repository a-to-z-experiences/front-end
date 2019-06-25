import React, { Component } from "react";
// import getExperiencesData fn to allow us to match events with action objects that change the reducer's state that changes what we receive as props
import { getExperiencesData } from "../actions";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class AvailableExperiences extends Component {
  state = {};
  componentDidMount() {
    getExperiencesData();
  }
  render() {
    return <div className="available-experiences" />;
  }
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to Login by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    availableExperiencesArray: state.AvailableExperiences
  };
};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { getExperiencesData }
)(AvailableExperiences);
