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
