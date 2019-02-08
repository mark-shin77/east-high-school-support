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
                <li><Link to="/add/user">Add User</Link></li>
                <li><Link to="/change/password">Change Password</Link></li>
                <li><Link to="/" onClick={()=>{localStorage.clear()}}>Log Out</Link></li>
                
            </ul>
        </nav>
        </header>
    </div>

    );
  }
}

export default DashHeader;