import React, { Component } from "react";
// import getExperiencesData fn to allow us to match events with action objects that change the reducer's state that changes what we receive as props
import { getAllExperiencesData } from "../actions";
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
    getAllExperiencesData();
  }
  render() {
    return (
      <div className="all-experiences">
        <form>
          <div className="form-title">ADD AN EXPERIENCE</div>
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
        </form>
        <div className="all-experiences-title">ALL EXPERIENCES</div>
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
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to Login by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    allExperiencesArray: state.allExperiences
  };
};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { getAllExperiencesData }
)(AllExperiences);
