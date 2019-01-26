import React, { Component } from "react";
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
						<li><div className="button-wrapper"><a href="#one" className="button large primary">Learn More</a></div></li>
					</ul>
					<p className="footnote">Sed amet magna? <a href="#">Feugiat lorem</a></p>
				</div>
				<a href="#one" class="more scrolly">Learn more</a>
			</section>

       );
  }
}

export default Banner;
