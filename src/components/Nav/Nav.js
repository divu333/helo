import React, { Component } from "react";
import home_logo from "../../../src/home_logo.png";
import new_logo from "../../../src/new_logo.png";
import logout from "../../../src/shut_down.png";
import { Link } from "react-router-dom";
import "../Nav/nav.css";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateUserName,
  updatePassword,
  updateProfilePic,
  updateUserId
} from "../../ducks/reducer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      profile_pic: "",
      id: ""
    };
  }
  componentDidMount() {
    console.log("hello at Nav", this.props);
  }

  render() {
    return (
      <div className="nav">
        <div className="nav_profile">
          <div
            className="nav_profile_pic"
            style={{
              backgroundImage:
                "url(" + `https://robohash.org/${this.props.username}` + ")"
            }}
          />
        </div>
        <div className="username" />

        <div className="nav_links">
          <Link to="/dashboard">
            <img className="nav_img" src={home_logo} alt="home" />
          </Link>

          <Link to="/new">
            <img className="nav_img" src={new_logo} alt="new post" />
          </Link>
        </div>

        <Link to="/">
          <img className="nav_img nav_logout" src={logout} alt="logout" />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { username, profile_pic, password, id } = state;

  return {
    username,
    profile_pic,
    password,
    id
  };
}
export default connect(
  mapStateToProps,
  { updateUserName, updateProfilePic, updatePassword, updateUserId }
)(Nav);
