import React, { Component } from "react";
// import Link
import { Link } from "react-router-dom";
// import postNewExperience action creator
import { postNewExperience } from "../actions";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class Form extends Component {
  state = {
    newExperience: {
      title: "",
      date: "",
      location: "",
      price: ""
    }
  };
  render() {
    return (
      <div className="form">
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
        <form onSubmit={this.hostNewExperienceHandler}>
          <input
            name="title"
            value={this.state.newExperience.title}
            placeholder="title"
            onChange={this.changeHandler}
          />
          <input
            name="date"
            value={this.state.newExperience.date}
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
          <button>Add to Hosting Experiences</button>
        </form>
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
  hostNewExperienceHandler = event => {
    event.preventDefault();
    this.props.postNewExperience(this.state.newExperience).then(response => {
      this.props.history.push("/available-experiences");
    });
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

// creating mapStateToProps fn that takes in state from reducers. We pass props to component by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message
    // userData: state.userData,
    // userId: state.userId,
    // userExperiences: state.userExperiences
  };
};

// linking mapStateToProps, action creators to Form component
export default connect(
  mapStateToProps,
  { postNewExperience }
)(Form);
