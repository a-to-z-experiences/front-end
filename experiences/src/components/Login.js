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
        {this.props.error && <div>{this.props.error}</div>}
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
  }

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
