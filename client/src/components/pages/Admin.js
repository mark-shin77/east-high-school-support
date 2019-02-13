import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic34 from '../../images/pic34.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogApp from "../../components/LoginApp";


class Admin extends Component {
  render() {
    return (
        <div>
        <Header />

        <div id="main" className="container">
            <section id="content">

            </section>
            <LogApp/>

        </div>
        <Footer />
        </div>
       );
  }
}

export default Admin;