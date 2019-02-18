import React from "react";
import home_logo from "../../../src/home_logo.png";
import new_logo from "../../../src/new_logo.png";
import logout from "../../../src/shut_down.png";
import { Link } from "react-router-dom";
import "../Nav/nav.css";
// import "../../App.css";

var divStyle = {
  backgroundImage: "url(https://robohash.org/ )"
};

function Nav(props) {
  return (
    <div className="nav">
      <div className="nav_profile">
        <div
          className="nav_profile_pic"
          style={{ backgroundImage: "url(" + divStyle + ")" }}
        />

        <p />
      </div>

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

export default Nav;
