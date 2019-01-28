import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";

class Banner extends Component {
  render() {
    return (
         
			<section id="banner">
				<div className="inner" >
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
					<h2>STUDENT & FAMILY SUPPORT</h2>
					<ul className="actions special">
						<li><div className="button-wrapper"><a href="#one" className="button-wrapper button large primary">Learn More</a></div></li>
					</ul>
					<p className="footnote" style={{fontSize: "1.4em", fontWeight: "bold", letterSpacing: "2px"}}> <Link to="/hours">HOURS</Link></p>
					
				</div>
				<a href="#one" class="more scrolly">Learn more</a>
			</section>

       );
  }
}

export default Banner;
