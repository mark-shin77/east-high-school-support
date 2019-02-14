import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";


class DashHeader extends Component {
  render() {
    return (
      
   <div>
        <header id="header">
        
        
         
        <nav id="nav">
            <ul>
                <li><Link to="/add/user">ADD USER</Link></li>
                <li><Link to="/change/password">CHANGE PASSWORD</Link></li>
                <li><Link to="/" onClick={()=>{localStorage.clear()}}>LOG OUT</Link></li>
                
            </ul>
        </nav>
        </header>
    </div>

    );
  }
}

export default DashHeader;