import React, { Component } from "react";
// import link so you can link stuff
import { Link } from "react-router-dom";
import { getUserHostingExperiencesData } from "../actions";
// import Buthrefn and other stuff from reactstrap component
import "../css/hostingExperiences.scss";
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
  Spinner
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
class HostingExperiences extends Component {
  state = {
    // userHostingExperiencesDataArray: this.props.userHostingExperiencesDataArray,
    // filteredUserHostingExperiencesDataArray: {}
  };
  componentDidMount() {
    this.props.getUserHostingExperiencesData(localStorage.getItem("user_id"));
  }
  render() {
    // console.log("hostingarray: ", this.props.userHostingExperiencesDataArray);
    if (!this.props.userHostingExperiencesDataArray) {
      return <Spinner color="info" />;
    } else
      return (
        <div className="hosting-experiences-wrapper">
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
          <div className="hosting-experiences">
            <div className="hosting-experiences-title">Experiences to Host</div>
            {this.props.userHostingExperiencesDataArray.map(
              hostingExperienceObj => (
                <Link
                  to={`/hosting-experiences/${hostingExperienceObj.id}`}
                  style={{ textDecoration: "none" }}
                  key={hostingExperienceObj.id}
                >
                  <div className="hosting-experience">
                    <div className="hosting-experience-title">
                      {hostingExperienceObj.title}
                    </div>
                    <div className="hosting-experience-location">
                      location: {hostingExperienceObj.location}
                    </div>
                    <div className="hosting-experience-date">
                      date: {hostingExperienceObj.date}
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
// creating mapStateToProps fn that takes in state from reducers. We pass props to component by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error,
    message: state.message,
    userData: state.userData,
    userId: state.userId,
    userHostingExperiencesDataArray: state.userHostingExperiencesDataArray
  };
};

// linking mapStateToProps, action creators to PostedExperiences component
export default connect(
  mapStateToProps,
  { getUserHostingExperiencesData }
)(HostingExperiences);
