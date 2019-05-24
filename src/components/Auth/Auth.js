import React, { Component } from "react";
import logo from "../../../src/helo_logo.png";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateUserName,
  updatePassword,
  updateProfilePic
} from "../../ducks/reducer";
class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: "",
      password: "",
      profile_pic: ""
    };
  }

  CreateUser() {
    let promise = axios.post("/api/users", {
      username: this.props.username,
      password: this.props.password,
      profile_pic: `https://robohash.org/${this.props.username}`
    });
    console.log("promise", promise);
  }

  userLogin(username) {
    console.log("works", username);
    axios.get(`/auth/users/${username}`).then(res => {
      this.setState({ users: res.data });
      console.log("full users", res.data);
    });
  }

  render() {
    const { updateUserName, updatePassword } = this.props;
    return (
      <div className="auth">
        <div className="auth_container">
          <img src={logo} alt="logo" />
          <h1 className="auth_title"> Helo </h1>
          <div className="auth_input_box">
            <p> Username:</p>
            <input
              type="text"
              name="username"
              placeholder="name"
              onChange={e => updateUserName(e.target.value)}
            />
          </div>
          <div className="auth_input_box">
            <p>Password:</p>
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={e => updatePassword(e.target.value)}
            />
          </div>
          <div className="auth_button_container">
            <Link to="/dashboard">
              <button
                className="button_form"
                onClick={() => this.userLogin(this.props.username)}
              >
                Login{" "}
              </button>
            </Link>
            <Link to="/nav">
              <button className="button_form" onClick={() => this.CreateUser()}>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { username, profile_pic, password } = state;

  return {
    username,
    profile_pic,
    password
  };
}

export default connect(
  mapStateToProps,
  { updateUserName, updateProfilePic, updatePassword }
)(Auth);
