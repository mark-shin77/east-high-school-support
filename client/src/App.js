import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";
import Nav from './Nav'
import Home from './Home'
import Work from './Work'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
    <Nav />
    <Home />
    <Work />
    <Portfolio />
    <Contact />
    </div>

   

    );
  }
}

export default App;
