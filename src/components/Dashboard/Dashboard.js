import React, { Component } from "react";
import "../Dashboard/Dashboard.css";
import Nav from "../Nav/Nav.js";
import { connect } from "react-redux";
import {
  updateUserName,
  updatePassword,
  updateProfilePic,
  updateUserId
} from "../../ducks/reducer";
import axios from "axios";
import { throws } from "assert";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      profile_pic: "",
      username: ""
    };
  }
  componentDidMount() {
    console.log("posts are here", this.props.id);

    axios.get("/user/posts").then(res => {
      console.log("posts" + res);

      this.setState({ posts: res.data });
      console.log("posts", res.data);
    });
  }

  goToPost = id => {
    console.log("id" + id);
    localStorage.setItem("selectedpost", id);
    this.props.history.push(`/posts/${id}`);
    // you can manage here to pass the clicked card id to the card details page if needed
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="dashboard">
          <div className="content container-box">
            <div className="search-box">
              <input
                className="dash_search_bar"
                placeholder="Search by Title"
              />
              <img className="search_img" src={`/images/search.png`} />
              <button className="reset" id="reset_button">
                Reset
              </button>
            </div>
            <div className="dash_check_box">
              <p> My posts</p>
              <input type="checkbox" value="on" />
            </div>
          </div>
          {this.state.posts.map(post => (
            <div className="content dash_posts_container" key={post.post_id}>
              {/* <a href={`#post/${post.id}`}> */}
              <a onClick={() => this.goToPost(post.post_id)}>
                <div className="content dash_post_box">
                  <h3>{post.title} </h3>
                  <div className="author_box">
                    <p> by {post.username}</p>
                    <img alt="author" src={post.profile_pic} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
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
)(Dashboard);
