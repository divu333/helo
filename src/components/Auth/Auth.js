import React, { Component } from "react";
import logo from "../../../src/helo_logo.png";
class Auth extends Component {
  state = {};
  render() {
    return (
      <div className="auth">
        <div className="auth_container">
          <img src={logo} alt="logo" />
          <h1 className="auth_title"> Helo </h1>
          <div className="auth_input_box">
            <p> Username:</p>
            <input value="" />
          </div>
          <div className="auth_input_box">
            <p>Password:</p>
            <input type="password" value="" />
          </div>
          <div className="auth_button_container">
            <button className="button_form">Login</button>
            <button className="button_form">Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
