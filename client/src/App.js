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
import ActiveSignupList from './components/ActiveSignupList';
import AvailableTimeSlots from './components/AvailableTimeSlots';

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
    <Nav />
    <Home />
    {/* <div className="members">
      <h3>Sign Up Genius Members</h3>
      <p>{this.state.firstName} {this.state.lastName} {this.state.email}</p>
    </div>
    <div className="active">
      <h3>Sign Up Genius Active Events</h3>
      <ActiveSignupList activeSignUpResults={this.state.activeSignUpResults} />
    </div>
    <div className="openslots">
      <h3>Sign Up Genius Available Slots</h3>
      <AvailableTimeSlots availableTimeSlots={this.state.availableTimeSlots}/>
    </div> */}
    <Work />
    <Portfolio />
    <div className="donations">
      {/* <h1>East High Donations</h1>
      <h2>Donate $5 to East High School</h2>
      <form action="/donations/pay" method="post">
        <input type="submit" value="donate" />
      </form> */}
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="YN5WXSATP3XGG" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
    <Contact />
    </div>
    );
  }
}

export default App;
