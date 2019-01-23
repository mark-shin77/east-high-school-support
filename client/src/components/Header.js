import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";


class Header extends Component {
  render() {
    return (
      
   <div>
        <header id="header">
        <h1 style={{whiteSpace: "pre"}}>
           <Link to="/inspect">GIVE FOOD </Link>|
           <Link to="/donate"> GIVE MONEY </Link>|
           <Link to="/volunteer"> GIVE TIME</Link></h1>
        <nav id="nav">
            <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/admin">Log In</Link></li>
                
            </ul>
        </nav>
    </header>
</div>


    );
  }
}

export default Header;
