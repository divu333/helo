import React, { Component } from "react";
import logo from "../../../src/helo_logo.png";
import { Link } from "react-router-dom";

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth_container">
          <img src={logo} alt="logo" />
          <h1 className="auth_title"> Helo </h1>
          <div className="auth_input_box">
            <p> Username:</p>
            <input type="text" />
          </div>
          <div className="auth_input_box">
            <p>Password:</p>
            <input type="password" />
          </div>
          <div className="auth_button_container">
            <Link to="/dashboard">
              {" "}
              <button className="button_form">Login </button>
            </Link>

            <button className="button_form">Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
