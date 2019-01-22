import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/Login"
import Nav from './Nav'
import Home from './Home'
import Work from './Work'
import Portfolio from './Portfolio'
import Contact from './Contact'
import SignupForm from './components/signUp';
import LogApp from "./components/LoginApp"

class App extends Component {
  render() {
    return (
      <div>
    <Nav />
    <Home />
    <Work />
    <Portfolio />
    <Contact />
    <Router>
      <div>
    <Route exact path="/login1" component={LogApp}/>
    <Route exact path="/signup" component={SignupForm}/>
       </div>
    </Router>
    </div>

   

    );
  }
}

export default App;
