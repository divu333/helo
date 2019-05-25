import React, { Component } from "react";
import "../Post/Post.css";
import "../Dashboard/Dashboard.css";
import Nav from "../Nav/Nav.js";
import { connect } from "react-redux";
import axios from "axios";

import {
  updateUserName,
  updatePassword,
  updateProfilePic,
  updateUserId
} from "../../ducks/reducer";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      profile_pic: "",
      username: "",
      id: ""
    };
  }

  componentDidMount() {
    let post_id = localStorage.getItem("selectedpost");
    console.log("post_is" + post_id);
    axios
      .get(`/posts/${post_id}`)

      .then(res => {
        this.setState({ posts: res.data });
        console.log("post data", res.data);
      });
  }

  render() {
    return (
      <div className="post-container">
        <Nav />
        <div className="Post content_box">
          {this.state.posts.map(post => (
            <div>
              <div className="post_header" key={post.post_id}>
                <h2 className="title">{post.title}</h2>
                <div className="author_box">
                  <p>by {post.username} </p>
                  <img alt="author" src={post.profile_pic} />
                </div>
              </div>

              <div className="post_content_box">
                <img alt="image" src={post.img} className="post_img" />
                <p>{post.content}</p>
              </div>
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
)(Post);
