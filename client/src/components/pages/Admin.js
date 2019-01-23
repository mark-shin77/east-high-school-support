import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic08 from '../../images/pic08.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogApp from "../../components/LoginApp"

class Admin extends Component {
  render() {
    return (
        <div>
        <Header />

       
            <section id="content">
                <a href="#" className="image fit"><img src={pic08} alt="" /></a>

            </section>
            <LogApp/>

     
        <Footer />
        </div>
       );
  }
}

export default Admin;