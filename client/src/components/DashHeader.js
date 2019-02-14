import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./DashCards/dash.css";
import "../assets/css/font-awesome.min.css";
import pic24 from '../images/pic24.png';


class DashHeader extends Component {
  render() {
    return (
      
   <div>
        <header id="dashhead">
        
        
        <h1 style={{ whiteSpace: "pre" }}>
                        <Link to="/"><img src={pic24} className="baby-icon" alt="navbar"></img></Link>
                        </h1>
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