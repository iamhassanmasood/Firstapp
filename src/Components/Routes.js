import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Dashboard from "../Components/Dashboard";
import Signin from "../Signin";
import Signup from "../Signup";

class CustomRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default CustomRoutes;
