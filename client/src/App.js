import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/main.css'
import "./assets/css/font-awesome.min.css";
import LoginForm from "./components/Login"
import Home from './Home'
import Contact from './Contact'
import SignupForm from './components/signUp';
import LogApp from "./components/LoginApp"

function App() {
    return (
      
      <Router>
      <div>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={LogApp}/>
            <Route path="/signup" component={SignupForm}/>
      </div>
      </Router>
    );
  }


export default App;
