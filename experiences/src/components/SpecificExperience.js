import React, { Component } from "react";
// importing link so I can link stuff
import { Link } from "react-router-dom";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";
import { getSpecificExperience } from "../actions";

class SpecificExperience extends Component {
  state = {};
  componentDidMount() {
    const specificExperienceId = this.props.match.params.experienceId;
    this.props.getSpecificExperience(specificExperienceId);
  }
  render() {
    return (
      <div class="specific-experience-wrapper">
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
            View My Hosting Experiences
          </div>
        </Link>
        <Link to="/host-an-experience">
          <div className="host-an-experience-title">Host an experience</div>
        </Link>
        <div className="specific-experience">
          <div className="specific-experience-title">
            {this.props.specificExperienceObject.title}
          </div>
          <div className="specific-experience-description">
            {this.props.specificExperienceObject.description}
          </div>
          <div className="specific-experience-dates">
            {this.props.specificExperienceObject.dates}
          </div>
          <div className="specific-experience-location">
            {this.props.specificExperienceObject.location}
          </div>
          <div className="specific-experience-price">
            {this.props.specificExperienceObject.price}
          </div>
          {localStorage.getItem("token") && <button>RSVP</button>}
          <button onClick={this.goBack}>Back</button>
        </div>
      </div>
    );
  }
  goBack = event => {
    event.preventDefault();
    this.props.history.push("/available-experiences");
  };
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to SpecificExperience by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    specificExperienceObject: state.specificExperienceObject,
    specificExperienceId: state.specificExperienceId
  };
};
// linking mapStateToProps, action creators to SpecificExperience component
export default connect(
  mapStateToProps,
  { getSpecificExperience }
)(SpecificExperience);
