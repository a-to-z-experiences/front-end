import React, { Component } from "react";
// import connect to connect the action creators and props we want from reducer's state to component
import { connect } from "react-redux";
// import login and register action creators
import { login, register } from "../actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <div className="login">
        <div className="register-login-title">Register/Login</div>
        {this.props.error && <div>{this.props.error}</div>}
        <form>
          <input
            name="username"
            placeholder="Enter username here"
            value={this.state.credentials.username}
            onChange={this.changeHandler}
          />
          <input
            name="password"
            placeholder="Enter password here"
            value={this.state.credentials.password}
            onChange={this.changeHandler}
          />
          <button onClick={this.loginHandler}>Login</button>
          <button onClick={this.registerHandler}>Register</button>
        </form>
      </div>
    );
  }

  // changeHandler for the user typing
  // changeHandler = event => {
  //   event.preventDefault();
  //   this.setState(previousState => ({
  //     ...previousState,
  //     credentials: {
  //       ...previousState.credentials,
  //       [event.target.name]: event.target.value
  //     }
  //   }));
  // };
  // loginHandler for the Login button
  loginHandler = event => {
    event.preventDefault();
    this.props.login(this.state.credentials);
  };
  // registerHandler for the Login button
  registerHandler = event => {
    event.preventDefault();
    this.props.register(this.state.credentials);
  };
}
// creating mapStateToProps fn that takes in state from reducers. We pass props to Login by utilizing the reducer's state
const mapStateToProps = state => {
  return {
    error: state.error
  };
};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { login, register }
)(Login);
