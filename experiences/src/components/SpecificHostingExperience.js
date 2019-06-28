import React, { Component } from "react";
// import link so you can link stuff
import { Link } from "react-router-dom";
import { getSpecificExperience, deleteSpecificExperience } from "../actions";
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
class SpecificHostingExperiences extends Component {
  state = {
    // userHostingExperiencesDataArray: this.props.userHostingExperiencesDataArray,
    // filteredUserHostingExperiencesDataArray: {}
    // updatedExperience: {
    //   title: this.props.specificExperienceObject.title,
    //   date: this.props.specificExperienceObject.date,
    //   location: this.props.specificExperienceObject.location,
    //   price: this.props.specificExperienceObject.price
    // }
  };
  componentDidMount() {
    const specificExperienceId = this.props.match.params.experienceId;
    this.props.getSpecificExperience(specificExperienceId);
  }
  render() {
    const specificExperienceId = this.props.match.params.experienceId;
    // console.log("hostingarray: ", this.props.userHostingExperiencesDataArray);
    if (!this.props.specificExperienceObject) {
      return <Spinner color="info" />;
    } else
      return (
        <div className="hosting-experiences">
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
          <div className="specific-hosting-experience">
            <div className="specific-hosting-experience-title">
              {this.props.specificExperienceObject.title}
            </div>
            <div className="specific-hosting-experience-description">
              {this.props.specificExperienceObject.description}
            </div>
            <div className="specific-hosting-experience-location">
              {this.props.specificExperienceObject.location}
            </div>
            <div className="specific-hosting-experience-date">
              {this.props.specificExperienceObject.date}
            </div>
            <div className="specific-hosting-experience-price">
              {this.props.specificExperienceObject.price}
            </div>
            <Link to={`/edit-experience/${specificExperienceId}`}>
              <Button color="info">Edit</Button>
            </Link>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      );
  }
  handleEdit = event => {
    event.preventDefault();
  };
  handleDelete = event => {
    const specificExperienceId = this.props.match.params.experienceId;
    event.preventDefault();
    this.props.deleteSpecificExperience(specificExperienceId).then(response => {
      this.props.history.push("/hosting-experiences");
    });
  };
  changeHandler = event => {
    const userId = localStorage.getItem("user_id");
    event.preventDefault();
    this.setState({
      ...this.state,
      updatedExperience: {
        ...this.state.updatedExperience,
        user_id: userId,
        [event.target.name]: event.target.value
      }
    });
  };
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
    specificExperienceObject: state.specificExperienceObject
  };
};

// linking mapStateToProps, action creators to PostedExperiences component
export default connect(
  mapStateToProps,
  { getSpecificExperience, deleteSpecificExperience }
)(SpecificHostingExperiences);
