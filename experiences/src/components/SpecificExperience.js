import React, { Component } from "react";
// importing link so I can link stuff
import { Link } from "react-router-dom";
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
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";
import { getSpecificExperience } from "../actions";
const divNav = {
  display: "flex",
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  marginBottom: "20px"
};
class SpecificExperience extends Component {
  state = {};
  componentDidMount() {
    const specificExperienceId = this.props.match.params.experienceId;
    this.props.getSpecificExperience(specificExperienceId);
  }
  render() {
    return (
      <div className="specific-experience-wrapper">
        <Navbar color="light" light expand="md" style={divNav}>
          <NavbarBrand href="/">Home</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/available-experiences">
                <div className="available-experiences-title">
                  Available Experiences
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hosting-experiences">
                <div className="hosting-experiences-title">
                  Experiences I'm Hosting
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/host-an-experience">
                <div className="host-an-experience-title">
                  Host an experience
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
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
