import React, { Component } from "react";
// import getExperiencesData fn to allow us to match events with action objects that change the reducer's state that changes what we receive as props
import { getAllExperiencesData, addNewExperience } from "../actions";
// import link so you can link the divs to their individual ID pages,
import { Link } from "react-router-dom";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class AllExperiences extends Component {
  state = {
    newExperience: {
      title: "",
      dates: "",
      location: "",
      price: ""
    }
  };
  componentDidMount() {
    this.props.getAllExperiencesData();
  }
  render() {
    return (
      <div className="all-experiences">
        <form onSubmit={this.addNewExperienceHandler}>
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
          <button>Add an Experience</button>
        </form>
        <div className="all-experiences-title">ALL EXPERIENCES</div>
        {this.props.allExperiencesArray.map(experienceObject => (
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
  addNewExperienceHandler = event => {
    event.preventDefault();
    this.props.addNewExperience(this.state.newExperience);
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
    allExperiencesArray: state.allExperiencesArray
  };
};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { getAllExperiencesData, addNewExperience }
)(AllExperiences);
