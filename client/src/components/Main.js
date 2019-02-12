import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";
import pic00 from '../images/pic00.jpg';
import pic16 from '../images/pic16.jpg';
import pic18 from '../images/pic18.jpg';
import pic20 from '../images/pic20.jpg';
import pic21 from '../images/pic21.jpg';
import pic22 from '../images/pic22.jpg';
import pic23 from '../images/pic23.jpg';
import pic24 from '../images/pic24.jpg';


class Main extends Component {
	render() {
		return (
			<div id="main" className="container">
				<section id="one" className="feature major">
					<header className="major">
						<h2>East High Student & Family Support</h2>
					</header>
					
					<section>
						<h2>Hello Friends of <span style={{color:"#CC0033"}}>E</span>ast High School</h2>
						<p  style = {{textAlign:"left"}}><span className="image left"><img src={pic00} alt="" /></span>At East High School we are committed to helping each student reach their full potential.  Through generous community donations and partnerships, we provide a very popular food pantry and a fantastic washroom with private and safe shower and laundry facilities; both are open daily.  We also have a wonderful clothing boutique, loaded with necessities for all weather conditions and special occasions. These services are free for all EHS students.  When students have their basic needs met, they are capable and empowered to succeed in school and in life!</p>
					</section>

					<section>
						<h2 style={{letterSpacing:"3px"}}>W<span style={{color:"#CC0033"}}>E</span> CAN H<span style={{color:"#CC0033"}}>E</span>LP</h2>
						<div  style = {{textAlign:"left"}}><span className="image right"><img src={pic16} alt="" /></span>
							<br/>
							<br/>
							<ul>
								<li>
									East High School is a rigorous and diverse public school of 2,000 students.
								</li>
								<li>
									Approximately 64% life below the poverty line, receiving free/reduced breakfasts and lunches.
								</li>
								<li>
									400 Refugee students
								</li>
								<li>
									Between 85 and 95 students are homeless.
								</li>
								<li>
									The East High Student and Family Support Initiative was created in 2016 to assist these students and their families.
								</li>
							</ul>
						</div>
					</section>
				</section>

			<hr/>	
					<div className="row">
						<div className="col-6 col-12-small">
							<Link to="/hours"  className="image fit my-inline">
								<h3 className="caption">
									FOOD
								</h3>
								<img src={pic20} alt="" />
							</Link>
						</div>
						<div className="col-6 col-12-small">
							<Link to="/hours"  className="image fit my-inline">
								<h3 className="caption">CLOTHING</h3>
								<img src={pic21} alt="" />
							</Link>
						</div>
						<div className="col-6 col-12-small">
							<Link to="/familysupport" className="image fit my-inline">
								<h3 className="caption">FAMILY SUPPORT</h3>
								<img src={pic22} alt="" />
							</Link>
						</div>
						<div className="col-6 col-12-small">

							<Link to="/familysupport" className="image fit my-inline">
								<h3 className="caption">DENTAL VISION EQUAL OPPORTUNITIES</h3>
								<img src={pic24} alt="" />
							</Link>
						</div>
						<div className="col-6 col-12-small">
							<Link to="/computers" className="image fit my-inline">
								<h3 className="caption">LAPTOPS</h3>
								<img src={pic23} alt="" />
							</Link>
						</div>
						<div className="col-6 col-12-small">
							<Link to="/hours"  className="image fit my-inline">
								<h3 className="caption">WASHROOM</h3>
								<img src={pic18} alt="" />
							</Link>
						</div>
					</div>	
					<hr/>
					<h2 className="major" style={{textAlign:"center"}}>How your donation helps students in need</h2>
						<div className="row">
							<div className="col-6 col-12-small">
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>FOOD</span> The Leopard Stash (food pantry) provides healthy snacks and meal ingredients for students and their families</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>CLOTHING </span>The Leopard Boutique is our own "clothing store" where students and families can find new and gently used clothing, shoes and jackets.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>FAMILY SUPPORT </span>We evaluate the unique situation of each student and provide support to them and their families as needed.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>WASHROOM </span>The newly completed East Washrooms provide a clean and safe place for our homeless and vulnerable students to wash clothing, shower and prepare for their school day.  The Washrooms are stocked with items for the student and their family, including new underwear, socks, towels and every possible shower/bathroom product needed</p>
								<ul className="actions">
									<li><a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift" className="button">Support East High</a></li>
								</ul>							
							</div>
							<div className="col-6 col-12-small">
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>DENTAL & VISION </span>Through the generosity of our community our support specialist connects students with free dental and vision support, medical and housing assistance and transportation.  Donors have also sponsored athletes who would not be able to participate without the a community sponsor.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>LAPTOPS </span>Comcast is providing a computer, loaded with software to any family that qualifies for free/reduced lunches for $149.99 and internet services of $9.99 per month. For many, the fee is unsurmountable and donors can choose to contribute to the EHS digital inclusion initiative.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>EQUAL OPPORTUNITIES </span>We have been able to help East High Students purchase uniforms and equipment to help give everyone a chance to participate in Sports and other school activities.</p>								

							</div>
						</div>
					
				<section id="four" className="feature major">						
					<h2 style={{letterSpacing:"3px"}}>
						W<span style={{color:"#CC0033"}}>E</span> CAN H<span style={{color:"#CC0033"}}>E</span>LP
					</h2>
					<p>At East High School we are committed to helping each student reach their full potential.</p>
					<ul className="actions special">
						<li>
							<a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift" className="button-wrapper2 button large primary">Support East High</a>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default Main;
