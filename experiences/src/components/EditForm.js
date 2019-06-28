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
import { updateSpecificExperience } from "../actions";
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
class EditForm extends Component {
  state = {
    updatedExperience: {
      title: this.props.specificExperienceObject.title,
      date: this.props.specificExperienceObject.date,
      location: this.props.specificExperienceObject.location,
      price: this.props.specificExperienceObject.price
    }
  };
  render() {
    // const specificExperienceId = this.props.match.experienceId;
    // const specificExperience =
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
            <NavItem active>
              <NavLink tag={Link} to="/hosting-experiences">
                <div className="hosting-experiences-title">
                  Experiences I'm Hosting
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/host-an-experience">
                <div className="host-an-experience-title">
                  Host an experience
                </div>
              </NavLink>
            </NavItem>
            <Button inline color="secondary" size="sm" onClick={this.logout}>
              Logout
            </Button>
          </Nav>
        </Navbar>
        <Container className="d-flex justify-content-center">
          <div className="form">
            <Form onSubmit={this.updateHandler}>
              <FormGroup>
                <Input
                  valid={this.state.updatedExperience.title}
                  name="title"
                  type="string"
                  value={this.state.updatedExperience.title}
                  placeholder="title"
                  onChange={this.changeHandler}
                  required
                />
                <FormText>Enter the title of your experience</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  valid={this.state.updatedExperience.date}
                  name="date"
                  type="string"
                  value={this.state.updatedExperience.date}
                  placeholder="date"
                  onChange={this.changeHandler}
                  required
                />
                <FormText>Enter the date of your experience</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  valid={this.state.updatedExperience.location}
                  name="location"
                  type="string"
                  value={this.state.updatedExperience.location}
                  placeholder="location"
                  onChange={this.changeHandler}
                  required
                />
                <FormText>Enter the location of your experience</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  valid={this.state.updatedExperience.price}
                  name="price"
                  type="string"
                  value={this.state.updatedExperience.price}
                  placeholder="price"
                  onChange={this.changeHandler}
                  required
                />
                <FormText>Enter the price of your experience</FormText>
              </FormGroup>
              <Button color="success" block>
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
  changeHandler = event => {
    // const userId = localStorage.getItem("user_id");
    event.preventDefault();
    this.setState({
      ...this.state,
      updatedExperience: {
        ...this.state.updatedExperience,
        // user_id: userId,
        [event.target.name]: event.target.value
      }
    });
  };
  updateHandler = event => {
    event.preventDefault();
    this.props
      .updateSpecificExperience(
        this.props.specificExperienceObject.id,
        this.state.updatedExperience
      )
      .then(response => {
        this.props.history.push("/hosting-experiences");
      });
    this.setState({
      ...this.state,
      updatedExperience: {
        ...this.state.updatedExperience,
        title: "",
        dates: "",
        location: "",
        price: ""
      }
    });
  };
  logout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };
}

// creating mapStatehrefProps fn that takes in state from reducers. We pass props href component by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    // userData: state.userData,
    userId: state.userId,
    specificExperienceObject: state.specificExperienceObject
    // userExperiences: state.userExperiences
  };
};

// NavLinking mapStatehrefProps, action creahrefrs href Form component
export default connect(
  mapStateToProps,
  { updateSpecificExperience }
)(EditForm);
