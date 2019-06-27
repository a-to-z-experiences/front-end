import React, { Component } from "react";
// // import NavLink
// import { NavLink } from "react-router-dom";
// import Buthrefn and other stuff from reactstrap component
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  Navbarhrefggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdownhrefggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import link
import { Link } from "react-router-dom";
// import postNewExperience action creahrefr
import { postNewExperience } from "../actions";
// import connect href connect the action creahrefrs and props we want from reducer's state href component
import { connect } from "react-redux";
const divNav = {
  display: "flex",
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  marginBottom: "20px"
};
// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   minHeight: "880px",
//   maxWidth: "800px"
// };
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
      <div>
        <Navbar color="light" light expand="md" style={divNav}>
          <NavbarBrand tag={Link} to="/">
            Home
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/available-experiences">
                <div className="available-experiences-title">
                  Available Experiences
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/hosting-experiences">
                <div className="hosting-experiences-title">
                  Experiences I'm Hosting
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active tag={Link} to="/host-an-experience">
                <div className="host-an-experience-title">
                  Host an experience
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Container className="d-flex justify-content-center">
          <div className="form">
            <Form onSubmit={this.hostNewExperienceHandler}>
              <FormGroup>
                <Input
                  valid={this.state.newExperience.title}
                  name="title"
                  type="string"
                  value={this.state.newExperience.title}
                  placeholder="title..."
                  onChange={this.changeHandler}
                  required
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
                  required
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
                  required
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
                  required
                />
                <FormText>Enter the price of your experience</FormText>
              </FormGroup>
              <Button color="success" block>
                Add Experience
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
        user_id: this.props.userId,
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

// creating mapStatehrefProps fn that takes in state from reducers. We pass props href component by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    // userData: state.userData,
    userId: state.userId
    // userExperiences: state.userExperiences
  };
};

// NavLinking mapStatehrefProps, action creahrefrs href Form component
export default connect(
  mapStateToProps,
  { postNewExperience }
)(ExperienceForm);
