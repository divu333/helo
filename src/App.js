import React, { Component } from "react";
import "./App.css";
import logo from "../src/helo_logo.png";

// import Dashboard from "./components/Dashboard/Dashboard";
// import Nav from "./components/Nav/Nav";
// import Auth from "./components/Auth/Auth";
// import Form from "./components/Form/Form";
// import Post from "./components/Post/Post";
class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
