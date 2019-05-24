import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      password: "",
      image_url: ""
    };
  }

  CreateUser() {
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      image_url: this.state.image_url
    };

    axios.post("/api/users", newUser).then(() => {});
  }

  render() {
    return <div />;
  }
}

export default Register;
