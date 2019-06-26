import React, { Component } from "react";
// import getUserData action creator
import { getUserData } from "../actions";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class UserHome extends Component {
  state = {};
  componentDidMount() {
    getUserData();
  }
  render() {
    return (
      <div className="user-home">
        {this.props.error && <div className="error">{this.props.error}</div>}
        {this.props.message && (
          <div className="message">{this.props.message}</div>
        )}
        <div className="user-home-title">USER HOME</div>
        <div className="upcoming-experiences">UPCOMING EXPERIENCES</div>
      </div>
    );
  }
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to UserHome by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    availableExperiencesArray: state.AvailableExperiences
  };
};
// linking mapStateToProps, action creators to UserHome component
export default connect(
  mapStateToProps,
  { getUserData }
)(UserHome);
