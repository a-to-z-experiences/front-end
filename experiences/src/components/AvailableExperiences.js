import React, { Component } from "react";
// import getExperiencesData fn to Availableow us to match events with action objects that change the reducer's state that changes what we receive as props
import { getAvailableExperiencesData } from "../actions";
// import availableExperiences css file
import "../css/availableExperiences.scss";
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
  DropdownItem,
  Toast,
  ToastBody,
  ToastHeader
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
          <NavbarBrand tag={Link} to="/">
            Home
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem active>
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
            <Button
              inline="true"
              color="secondary"
              size="sm"
              onClick={this.logout}
            >
              Logout
            </Button>
          </Nav>
        </Navbar>
        <div className="available-experiences">
          <div className="available-experiences-title">
            Available experiences
          </div>
          {this.props.availableExperiencesArray.map(
            availableExperiencesObject => (
              <Link
                to={`/available-experiences/${availableExperiencesObject.id}`}
                style={{ textDecoration: "none" }}
                key={availableExperiencesObject.id}
              >
                <div className="available-experience">
                  <div className="available-experience-title">
                    {availableExperiencesObject.title}
                  </div>
                  <div className="available-experience-date">
                    date: {availableExperiencesObject.date}
                  </div>
                  <div className="available-experience-location">
                    location: {availableExperiencesObject.location}
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    );
  }
  logout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };
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
