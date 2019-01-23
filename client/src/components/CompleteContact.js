import React, { Component } from "react";
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";

class CompleteContact extends Component {
  render() {
    return (
         
            <div>
		
			<div id="main" className="container medium">
				<header className="major">
					<h2>Contact</h2>
					<p>Faucibus neque adipiscing mi lorem semper blandit sed consequat</p>
				</header>

				
					<section id="content">
						<form method="post" action="#">
							<div className="row gtr-uniform gtr-50">
								<div className="col-6 col-12-xsmall">
									<input type="text" name="name" id="name" value="" placeholder="Name" />
								</div>
								<div className="col-6 col-12-xsmall">
									<input type="email" name="email" id="email" value="" placeholder="Email" />
								</div>
								<div className="col-12">
									<input type="text" name="subject" id="subject" value="" placeholder="Subject" />
								</div>
								<div className="col-12">
									<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
								</div>
								<div className="col-12">
									<ul className="actions special">
										<li><input type="submit" value="Send Message" class="primary" /></li>
										<li><input type="reset" value="Reset Form" /></li>
									</ul>
								</div>
							</div>
						</form>
					</section>

			    </div>				
			</div>        

       );
  }
}

export default CompleteContact;