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
import "../css/specificAvailableExperience.scss";
import { connect } from "react-redux";
import { getSpecificExperience, rsvpSpecificExperience } from "../actions";
const divNav = {
  display: "flex",
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  marginBottom: "20px"
};

class SpecificAvailableExperience extends Component {
  state = {};
  componentDidMount() {
    const specificExperienceId = this.props.match.params.experienceId;
    this.props.getSpecificExperience(specificExperienceId);
  }
  render() {
    return (
      <div className="specific-experience-wrapper">
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
        <div className="specific-available-experiences">
          <div className="specific-available-experience">
            <div className="specific-available-experience-title">
              {this.props.specificExperienceObject.title}
            </div>
            <div className="specific-available-experience-description">
              {this.props.specificExperienceObject.description}
            </div>
            <div className="divider" />
            <div className="specific-available-experience-location">
              location: {this.props.specificExperienceObject.location}
            </div>
            <div className="specific-available-experience-date">
              date: {this.props.specificExperienceObject.date}
            </div>

            <div className="specific-available-experience-price">
              price: {this.props.specificExperienceObject.price}
            </div>
            {localStorage.getItem("token") && (
              <div className="rsvp-button">
                <Button color="success" size="sm" onClick={this.rsvp}>
                  RSVP
                </Button>
              </div>
            )}
            <div className="back-button">
              <Button color="info" size="sm" onClick={this.goBack}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  rsvp = event => {
    const specificExperienceId = this.props.match.params.experienceId;
    const userId = localStorage.getItem("user_id");
    event.preventDefault();
    this.props
      .rsvpSpecificExperience(userId, specificExperienceId)
      .then(response => {
        this.props.history.push("/");
      });
  };
  goBack = event => {
    event.preventDefault();
    this.props.history.push("/available-experiences");
  };
  logout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to SpecificExperience by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    userId: state.userId,
    specificExperienceObject: state.specificExperienceObject,
    specificExperienceId: state.specificExperienceId
  };
};
// linking mapStateToProps, action creators to SpecificExperience component
export default connect(
  mapStateToProps,
  { getSpecificExperience, rsvpSpecificExperience }
)(SpecificAvailableExperience);
