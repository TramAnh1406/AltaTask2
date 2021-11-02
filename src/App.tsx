import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import IndexMenu from "./components/Menu/Menu";
import User from "./components/TopUser/User";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <IndexMenu />
            <main>
              <User />
              <div className="content">
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}
