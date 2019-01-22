import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/main.css'
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

function App() {
    return (
      
      <Router>
      <div>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donate} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/login" component={LogApp}/>
            <Route path="/signup" component={SignupForm}/>
      </div>
      </Router>
    );
  }


export default App;
