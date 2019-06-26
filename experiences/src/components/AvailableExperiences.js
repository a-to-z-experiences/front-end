import React, { Component } from "react";
// import getExperiencesData fn to Availableow us to match events with action objects that change the reducer's state that changes what we receive as props
import { getAvailableExperiencesData, postNewExperience } from "../actions";
// import link so you can link the divs to their individual ID pages,
import { Link } from "react-router-dom";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class AvailableExperiences extends Component {
  state = {
    newExperience: {
      title: "",
      dates: "",
      location: "",
      price: ""
    }
  };
  componentDidMount() {
    this.props.getAvailableExperiencesData();
  }
  render() {
    return (
      <div className="available-experiences-wrapper">
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
        <div className="available-experiences">
          <form onSubmit={this.postNewExperienceHandler}>
            <input
              name="title"
              value={this.state.newExperience.title}
              placeholder="title"
              onChange={this.changeHandler}
            />
            <input
              name="dates"
              value={this.state.newExperience.dates}
              placeholder="date"
              onChange={this.changeHandler}
            />
            <input
              name="location"
              value={this.state.newExperience.location}
              placeholder="location"
              onChange={this.changeHandler}
            />
            <input
              name="price"
              value={this.state.newExperience.price}
              placeholder="price"
              onChange={this.changeHandler}
            />
            <button>Post Experience</button>
          </form>
          <div className="available-experiences-title">
            Available experiences
          </div>
          {this.props.availableExperiencesArray.map(experienceObject => (
            <Link
              to={`/experiences/${experienceObject.id}`}
              key={experienceObject.id}
            >
              <div className="experience">
                <div className="title">{experienceObject.title}</div>
                <div className="title">{experienceObject.dates}</div>
                <div className="title">{experienceObject.location}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  changeHandler = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      newExperience: {
        ...this.state.newExperience,
        [event.target.name]: event.target.value
      }
    });
  };
  postNewExperienceHandler = event => {
    event.preventDefault();
    this.props.postNewExperience(this.state.newExperience);
    this.setState({
      ...this.state,
      newExperience: {
        ...this.state.newExperience,
        title: "",
        dates: "",
        location: "",
        price: ""
      }
    });
  };
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to Login by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    availableExperiencesArray: state.availableExperiencesArray
  };
};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { getAvailableExperiencesData, postNewExperience }
)(AvailableExperiences);
