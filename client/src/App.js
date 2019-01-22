import React, { Component } from "react";
import './assets/css/main.css'
import "./assets/css/font-awesome.min.css";
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import NoSidebar from "./components/NoSidebar";


class App extends Component {
  state = {
      firstName : "",
      lastName : "",
      email : "",
      activeSignUpResults : [],
      availableTimeSlots : []
  }
  
  componentDidMount() {
    this.loadVolunteers();
    this.loadActiveSignups();
    this.loadAvailableTimeSlots();
  }

  loadVolunteers = () => {
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

  loadActiveSignups = () => {
    API.getActiveSignups()
      .then(res => {
          this.setState({ activeSignUpResults : res.data.data });
        })
      .catch(err => console.log(err))
  }

  loadAvailableTimeSlots = () => {
    API.getReport()
      .then(res => {
        this.setState({ availableTimeSlots : res.data.data.signup });
      })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Main />
        <LeftSidebar />
        <RightSidebar />
        <Footer />
        <NoSidebar />

      </div>
    );
  }
}

export default App;
