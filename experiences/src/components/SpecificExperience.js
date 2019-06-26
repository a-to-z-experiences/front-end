import React, { Component } from "react";
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
        <button>Add Experience</button>
        <button>Update Experience</button>
        <button>Remove Experience</button>
      </div>
    );
  }
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
