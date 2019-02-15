import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Dashboard />
        <Auth />
        <Form />
        <Post />
      </div>
    );
  }
}

export default App;
