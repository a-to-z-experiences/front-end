import React, { Component } from "react";

export default class Login extends Component {
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
        </form>
      </div>
    );
  }
  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
}
