import React, { Component } from "react";
// import getUserData action creator
import { getUserRsvpedExperiencesData } from "../actions";
// importing link so I can link divs
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
class UserHome extends Component {
  state = {
    userRsvpedExperiencesDataArray: this.props.userRsvpedExperiencesDataArray
  };
  componentDidMount() {
    this.props.getUserRsvpedExperiencesData(localStorage.getItem("user_id"));
    // console.log(
    //   "array within CDM: ",
    //   this.state.userRsvpedExperiencesDataArray
    // );
  }
  render() {
    // console.log(
    //   "testing state property: ",
    //   this.state.userRsvpedExperiencesDataArray
    // );
    // console.log("this is our data array: ",this.props.userRsvpedExperiencesDataArray)
    return (
      <div className="user-home">
        {this.props.error && <div className="error">{this.props.error}</div>}
        {this.props.message && (
          <div className="message">{this.props.message}</div>
        )}
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
        <div className="upcoming-experiences-title">Upcoming Experiences</div>
        {this.props.userRsvpedExperiencesDataArray.map(
          userRsvpedExperienceObject => (
            <div
              className="rsvped-experience"
              key={userRsvpedExperienceObject.id}
            >
              <div>{userRsvpedExperienceObject.title}</div>
              <div>{userRsvpedExperienceObject.date}</div>
              <div>{userRsvpedExperienceObject.location}</div>
            </div>
          )
        )}
      </div>
    );
  }
  logout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };
}

// creating mapStateToProps fn that takes in state from reducers. We pass props to UserHome by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    userData: state.userData,
    userId: state.userId,
    userExperiences: state.userExperiences,
    userRsvpedExperiencesDataArray: state.userRsvpedExperiencesDataArray
  };
};
// linking mapStateToProps, action creators to UserHome component
export default connect(
  mapStateToProps,
  { getUserRsvpedExperiencesData }
)(UserHome);
