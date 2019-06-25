import React, { Component } from "react";
// import getExperiencesData fn to allow us to match events with action objects that change the reducer's state that changes what we receive as props
import { getExperiencesData } from "../actions";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";

class AvailableExperiences extends Component {
  state = {
    title: "",
    dates: "",
    location: "",
    price: ""
  };
  componentDidMount() {
    getExperiencesData();
  }
  render() {
    return (
      <div className="available-experiences">
        <div className="available-experiences-title">AVAILABLE EXPERIENCES</div>
        <form>
          <div className="form-title">ADD AN EXPERIENCE</div>
          <input
            name="title"
            value={this.state.title}
            placeholder="Enter new experience's title here"
            onClick={this.changeHandler}
          />
          <input
            name="dates"
            value={this.state.dates}
            placeholder="Enter new experience's dates here"
            onClick={this.changeHandler}
          />
          <input
            name="location"
            value={this.state.location}
            placeholder="Enter new experience's location here"
            onClick={this.changeHandler}
          />
          <input
            name="price"
            value={this.state.price}
            placeholder="Enter new experience's price here"
            onClick={this.changeHandler}
          />
        </form>
      </div>
    );
  }
  changeHandler = event => {
    event.preventDefault();
    this.setState(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    }));
  };
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
