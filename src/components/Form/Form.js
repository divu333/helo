import React, { Component } from "react";
import Nav from "../Nav/Nav.js";
import { connect } from "react-redux";
import {
  updateUserName,
  updatePassword,
  updateProfilePic,
  updateUserId
} from "../../ducks/reducer";
import "../Form/Form.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pname: "",
      title: "",
      image_url: "",
      content: ""
    };
  }
  clearInputs() {
    this.setState = {
      pname: "",
      content: ""
    };
  }

  componentDidMount() {
    console.log("id here", this.props);
  }

  handleChange(event, pname) {
    const value = event.target.value;
    this.setState({ [pname]: value });
  }

  handleChange(event, content) {
    const value = event.target.value;
    this.setState({ [content]: value });
  }
  handleChange(event, image_url) {
    const value = event.target.value;
    this.setState({ [image_url]: value });
  }

  addPost() {
    this.clearInputs();

    const post = {
      pname: this.state.pname,
      image_url: this.state.image_url,
      content: this.state.content,
      author_id: this.props.id
    };

    axios.post("/posts/user/post", post).then(() => {});
  }

  render() {
    return (
      <div className="form-container">
        <Nav />
        <div className="form content_box">
          <h2 className="title"> New Post</h2>
          <div className="form_input_box">
            <p>Title:</p>
            <input
              type="text"
              value={this.props.pname}
              onChange={e => this.handleChange(e, "pname")}
            />
          </div>

          <div
            className="form_img_prev"
            style={{
              backgroundImage:
                this.state.image_url === " "
                  ? "url(" + `/images/no_image.jpg` + ")"
                  : "url(" + this.state.image_url + ")"
            }}
          />
          {/* <img

            src={
              this.state.image_url === ""
                ? `/images/no_image.jpg`
                : this.state.image_url
            }
            alt="image"
            className="form_img_prev"
          /> */}
          <div className="form_input_box">
            <p> Image URL:</p>
            <input
              type="text"
              value={this.props.image_url}
              onChange={e => this.handleChange(e, "image_url")}
            />
          </div>
          <div className="form_text_box">
            <p>Content:</p>
            <textarea
              value={this.props.content}
              onChange={e => this.handleChange(e, "content")}
            />
          </div>
          <button
            className="dark_button form_button"
            onClick={() => this.addPost()}
          >
            Post
          </button>
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
)(Form);
