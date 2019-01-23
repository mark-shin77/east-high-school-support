import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic00 from '../../images/pic00.jpg';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;