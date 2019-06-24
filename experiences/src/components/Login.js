import React, { Component } from "react";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";
// import login and register action creators
import { login, register } from "../actions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <div className="login">
        <form>
          <input
            name="email"
            placeholder="Enter email here"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <input
            name="password"
            placeholder="Enter password here"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button onClick={this.loginHandler}>Login</button>
          <button onClick={this.registerHandler}>Register</button>
        </form>
      </div>
    );
  }log

  // changeHandler for the user typing
  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // loginHandler for the Login button
  loginHandler = event => {
    event.preventDefault();
    this.props.login(this.state);
  };
  // registerHandler for the Login button
  registerHandler = event => {
    event.preventDefault();
    this.props.register(this.state);
  };
}
const mapStateToProps = state => {};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { login, register }
)(Login);
