import React, { Component } from "react";
import { connect } from "react-redux";

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
          <button>Login</button>
          <button>Register</button>
        </form>
      </div>
    );
  }
  changeHandler(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  submitLogin(event) {}
}
const mapStateToProps = state => {};
// linking mapStateToProps, action creators to Login component
export default connect(
  mapStateToProps,
  { login, register }
)(Login);
