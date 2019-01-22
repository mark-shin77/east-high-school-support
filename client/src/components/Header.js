import React, { Component } from "react";
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";


class Header extends Component {
  render() {
    return (
      
   <div>
        <header id="header">
        <h1 style={{whiteSpace: "pre"}}><a href="index.html">GIVE FOOD </a>|<a href="index.html"> GIVE MONEY </a>|<a href="index.html"> GIVE TIME</a></h1>
        <nav id="nav">
            <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Log In</a></li>
                
            </ul>
        </nav>
    </header>
</div>


    );
  }
}

export default Header;
