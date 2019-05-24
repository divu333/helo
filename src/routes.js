import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";

import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";
import React from "react";
export default (
  <Switch>
    <Route component={Auth} exact path="/" />
    <Route component={Nav} exact path="/nav" />
    <Route component={Dashboard} exact path="/dashboard" />
    <Route component={Post} path="/post/:postid" />
    <Route component={Form} path="/new" />
  </Switch>
);
