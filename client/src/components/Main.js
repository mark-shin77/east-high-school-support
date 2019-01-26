import React, { Component } from "react";
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
						<header class="major">
							<h2>East High Student & Family Support</h2>
						</header>
						
						<section>
						<h2>Hello Friends of EAST HIGH</h2>
						<p  style = {{textAlign:"left"}}><span class="image left"><img src={pic00} alt="" /></span>At East High School we are committed to helping each student reach their full potential.  Through generous community donations and partnerships, we provide a very popular food pantry and a fantastic washroom with private and safe shower and laundery facilities; both are open daily.  We also have a wonderful clothing boutique, loaded with necessities for all weather conditions and special occassions. These services are free for all EHS students.  When students have their basic needs met, they are capable and empowered to succeed in school and in life!</p>
						</section>

												<section>
						<h2 style={{letterSpacing:"3px"}}>W<span style={{color:"#CC0033"}}>E</span> CAN H<span style={{color:"#CC0033"}}>E</span>LP</h2>
						<p  style = {{textAlign:"left"}}><span class="image right"><img src={pic16} alt="" /></span><ul>
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
								The East High Student and Family Supoort Initiative was created in 2016 to assist these students and their families.
							</li>
						</ul></p>
						</section>



					</section>

				


				
					<section id="three" className="feature">
						<div className="row">
							<div className="col-8 col-12-medium">
								<div className="box alt">
									<div className="row gtr-uniform gtr-50">
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">
													FOOD
												</h3>
												<img src={pic20} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">CLOTHING</h3>
												<img src={pic21} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">FAMILY SUPPORT</h3>
												<img src={pic22} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">DENTAL VISION EQUAL OPPORTUNITIES</h3>
												<img src={pic24} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">LAPTOPS</h3>
												<img src={pic23} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">WASHROOM</h3>
												<img src={pic18} alt="" />
											</a>
										</div>



									</div>
								</div>
							</div>
							<div className="col-4 col-12-medium imp-medium">
								<h2>How your donation helps students in need</h2>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>FOOD</span> The Leopard Stash (food pantry) provides healthy snacks and meal ingredients for students and their families</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>CLOTHING </span>The Leopard Boutique is our own "clothing store" where students and families can find new and gently used clothing, shoes and jackets.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>FAMILY SUPPORT </span>We evaluate the unique situation of each student and provide support to them and their families as needed.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>DENTAL & VISION </span>Through the generousity of our community our support specialist connects students with free dental and vision support, medical and housing assistance and transportation.  Donors have also sponsored athletes who would not be able to participate without the a community sponsor.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>LAPTOPS </span>Comcast is providing a computer, loaded with software to any family that qualifies for free/reduced lunches for $149.99 and internet services of $9.99 per month. For many, the fee is unsurmountable and donors can choose to contribute to the EHS digital inclusion initiative.</p>
								<p><span style={{color: "#CC0033", letterSpacing: "3px"}}>WASHROOM </span>The newly completed East Washrooms provide a clean and safe place for our homeless and vulnerable students to wash clothing, shower and prepare for their school day.  The Washrooms are stocked with items for the student and their family, including new underwear, socks, towels and every possible shower/bathroom product needed</p>





								<ul className="actions">
									<li><a href="#" className="button">Ipsum consequat</a></li>
								</ul>
							</div>
						</div>
					</section>

				
					<section id="four" className="feature major">
						<h2>Ipsum commodo blandit.</h2>
						<p>Arcu porttitor ut massa adipiscing nascetur varius lorem ipsum ante ac vestibulum lacinia.</p>
						<ul className="actions special">
							<li><a href="#" className="button large primary">Ante ornare adipiscing</a></li>
						</ul>
					</section>

			</div>
   
    );
  }
}

export default Main;
