import React, { Component } from "react";
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import pic04 from '../images/pic04.jpg';
import pic05 from '../images/pic05.jpg';
import pic06 from '../images/pic06.jpg';


class Main extends Component {
  render() {
    return (
      
        <div id="main" className="container">

					<section id="one" className="feature major">
						<span className="icon alt major fa-paper-plane"></span>
						<h2>Adipiscing lacus accumsan odio massa.</h2>
						<p>Arcu porttitor ut massa adipiscing nascetur varius lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci arcu et orci. Lobortis non commodo ante lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci. Arcu porttitor massa.</p>
					</section>

				
					<section id="two" className="feature">
						<div className="row">
							<div className="col-4 col-12-medium">
								<h2>Sed amet integer<br />
								interdum consequat.</h2>
								<p>Arcu porttitor ut massa adipiscing nascetur varius lorem ipsum ante ac vestibulum lacinia ante sed praesent. Iaculis porttitor turpis orci arcu et orci. Lobortis non commodo ante lorem ipsum porttitor turpis orci. Arcu porttitor massa sed lobortis non commodo ante lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor.</p>
								<ul className="actions">
									<li><a href="#" className="button">Ipsum consequat</a></li>
								</ul>
							</div>
							<div className="col-8 col-12-medium">
								<ul className="major-icons row">
									<li className="col-4 col-6-small col-12-xsmall">
										<span className="icon alt major fa-camera"></span>
										<p>Praesent sed adipiscing</p>
									</li>
									<li className="col-4 col-6-small col-12-xsmall">
										<span className="icon alt major fa-clock-o"></span>
										<p>Amet accumsan gravida</p>
									</li>
									<li className="col-4 col-6-small col-12-xsmall">
										<span className="icon alt major fa-cloud"></span>
										<p>Risus aliquet feugiat</p>
									</li>
									<li className="col-4 col-6-small col-12-xsmall">
										<span className="icon alt major fa-code"></span>
										<p>Accumsan rhoncus</p>
									</li>
									<li className="col-4 col-6-small col-12-xsmall">
										<span className="icon alt major fa-database"></span>
										<p>Vitae primis placerat</p>
									</li>
									<li className="col-4 col-6-small col-12-xsmall">
										<span className="icon alt major fa-bolt"></span>
										<p>Integer nisl faucibus</p>
									</li>
								</ul>
							</div>
						</div>
					</section>

				
					<section id="three" className="feature">
						<div className="row">
							<div className="col-8 col-12-medium">
								<div className="box alt">
									<div className="row gtr-uniform gtr-50">
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">Praesent sed adipiscing</h3>
												<img src={pic01} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">Amet accumsan gravida</h3>
												<img src={pic02} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">Risus aliquet feugiat</h3>
												<img src={pic03} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">Accumsan rhoncus</h3>
												<img src={pic04} alt="" />
											</a>
										</div>
										<div cclassName="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">Vitae primis placerat</h3>
												<img src={pic05} alt="" />
											</a>
										</div>
										<div className="col-6 col-12-xsmall">
											<a href="#" className="image fit">
												<h3 className="caption">Integer nisl faucibus</h3>
												<img src={pic06} alt="" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-4 col-12-medium imp-medium">
								<h2>Cubilia et lorem<br />
								feugiat consequat.</h2>
								<p>Arcu porttitor ut massa adipiscing nascetur varius lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci arcu et orci. Lobortis non commodo ante lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci. Arcu porttitor massa.</p>
								<p>Arcu porttitor ut massa adipiscing nascetur varius lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci arcu et orci. Lobortis non commodo ante lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci. Arcu porttitor massa. Arcu porttitor ut massa adipiscing nascetur varius lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci arcu et orci. Lobortis non commodo ante lorem.</p>
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
