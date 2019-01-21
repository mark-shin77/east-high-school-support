import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";
import API from "./utils/API"
import Nav from './Nav'
import Home from './Home'
import Work from './Work'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {
  state = {
      signupgenius : [],
      firstName : "",
      lastName : "",
      email : ""
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.getVolunteers()
    .then(res => {
      this.setState({ 
        firstName : res.data.data.members[0].firstname , 
        lastName : res.data.data.members[0].lastname , 
        email : res.data.data.members[0].email
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
    <Nav />
    <Home />
    <div className="signupgenius">
      <h1>Sign Up Genius Testing</h1>
      <p>{this.state.firstName} {this.state.lastName} {this.state.email}</p>
    </div>
    <Work />
    <Portfolio />
    <Contact />
    </div>
    );
  }
}

export default App;
