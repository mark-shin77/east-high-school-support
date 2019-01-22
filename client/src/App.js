import React, { Component } from "react";
import './assets/css/main.css'
import "./assets/css/font-awesome.min.css";
import API from './utils/API';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import NoSidebar from "./components/NoSidebar";


class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    activeSignUpResults: [],
    availableTimeSlots: []
  }

  componentDidMount() {
    // this.loadVolunteers();
    // this.loadActiveSignups();
    // this.loadAvailableTimeSlots();
  }

  loadVolunteers = () => {
    API.getVolunteers()
      .then(res => {
        this.setState({
          firstName: res.data.data.members[0].firstname,
          lastName: res.data.data.members[0].lastname,
          email: res.data.data.members[0].email
        })
      })
      .catch(err => console.log(err))
  }

  loadActiveSignups = () => {
    API.getActiveSignups()
      .then(res => {
        this.setState({ activeSignUpResults: res.data.data });
      })
      .catch(err => console.log(err))
  }

  loadAvailableTimeSlots = () => {
    API.getReport()
      .then(res => {
        this.setState({ availableTimeSlots: res.data.data.signup });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="9UQFSERSR7YZE" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="YN5WXSATP3XGG" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
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
