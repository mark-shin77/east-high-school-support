import React, { Component } from "react";
import logo from "./logo.svg";
import AppBar from '@material-ui/core/AppBar';
import ButtonAppBar from './components/NavBar'
import SimpleAppBar from './components/NavBar2'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <SimpleAppBar></SimpleAppBar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
        
      </div>
    );
  }
}

export default App;
