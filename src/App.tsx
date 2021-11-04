import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import IndexMenu from "./components/Menu/Menu";
import User from "./components/TopUser/User";
import ChatBody from "./components/QuestionAndAnswer/chatBody/ChatBody";

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
              <Route path="/question-answer" component={ChatBody}/>                
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}
