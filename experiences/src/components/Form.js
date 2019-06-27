import React, { Component } from "react";
// import Link
import { Link } from "react-router-dom";
// import Button and other stuff from reactstrap component
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";
// import postNewExperience action creator
import { postNewExperience } from "../actions";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";
const divStyle = {
  display: "flex",
  alignItems: "center",
  minHeight: "880px"
};
class ExperienceForm extends Component {
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
      <div className="wrapper" style={divStyle}>
        <Container className="d-flex justify-content-center">
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
                Experiences I'm Hosting
              </div>
            </Link>
            <Link to="/host-an-experience">
              <div className="host-an-experience-title">Host an experience</div>
            </Link>
            <Form onSubmit={this.hostNewExperienceHandler}>
              <FormGroup>
                <Input
                  valid={this.state.newExperience.title}
                  name="title"
                  type="string"
                  value={this.state.newExperience.title}
                  placeholder="title..."
                  onChange={this.changeHandler}
                />
                <FormText>Enter the title of your experience</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  valid={this.state.newExperience.date}
                  name="date"
                  type="string"
                  value={this.state.newExperience.date}
                  placeholder="date..."
                  onChange={this.changeHandler}
                />
                <FormText>Enter the date of your experience</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  valid={this.state.newExperience.location}
                  name="location"
                  type="string"
                  value={this.state.newExperience.location}
                  placeholder="location..."
                  onChange={this.changeHandler}
                />
                <FormText>Enter the location of your experience</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  valid={this.state.newExperience.price}
                  name="price"
                  type="string"
                  value={this.state.newExperience.price}
                  placeholder="price..."
                  onChange={this.changeHandler}
                />
                <FormText>Enter the price of your experience</FormText>
              </FormGroup>
              <Button color="success" block>
                Add to Hosting Experiences
              </Button>
            </Form>
          </div>
        </Container>
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
)(ExperienceForm);
