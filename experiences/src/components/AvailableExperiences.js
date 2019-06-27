import React, { Component } from "react";
// import getExperiencesData fn to Availableow us to match events with action objects that change the reducer's state that changes what we receive as props
import { getAvailableExperiencesData } from "../actions";
// import link so you can link the divs to their individual ID pages,
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
const divNav = {
  display: "flex",
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  marginBottom: "20px"
};
class AvailableExperiences extends Component {
  state = {};
  componentDidMount() {
    this.props.getAvailableExperiencesData();
  }
  render() {
    return (
      <div className="available-experiences-wrapper">
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
        <div className="available-experiences">
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
  { getAvailableExperiencesData }
)(AvailableExperiences);
