import React, { Component } from "react";
import Home from "./pages/home/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faCoffee,
  faCircle,
  faUserFriends,
  faComment,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";
import "./App.css";
library.add(faSearch);
library.add(faCoffee);
library.add(faLinkedin);
library.add(faComment);
library.add(faCircle);
library.add(faUserFriends);
library.add(faBolt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
