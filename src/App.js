import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import Nav from "./components/Nav/Nav";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>{routes}</HashRouter>
      </div>
    );
  }
}

export default App;
