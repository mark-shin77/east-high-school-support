import React, { Component } from "react";
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";
import pic07 from '../images/pic07.jpg';
import pic08 from '../images/pic08.jpg';
import pic09 from '../images/pic09.jpg';
import pic10 from '../images/pic10.jpg';
import pic11 from '../images/pic11.jpg';


class EntireTemplate extends Component {
  render() {
    return (
      <div>
        <header id="header">
        <h1><a href="index.html">Exponent</a></h1>
        <nav id="nav">
            <ul>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In</a></li>
                <li className="special">
                    <a href="#menu" className="icon fa-bars">Menu</a>
                    <div id="menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>
                                <span>Layouts</span>
                                <ul>
                                    <li><a href="left-sidebar.html">Left Sidebar</a></li>
                                    <li><a href="right-sidebar.html">Right Sidebar</a></li>
                                    <li><a href="no-sidebar.html">No Sidebar</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </header>


    <div id="main" className="container">
        <header className="major">
            <h2>Elements</h2>
            <p>Faucibus neque adipiscing mi lorem semper blandit sed consequat</p>
        </header>

       
            <section>
                <h3>Text</h3>
                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                This is <u>underlined</u> and this is code:  Finally, <a href="#">this is a link</a>.</p>

                <hr />

                <header>
                    <h3>Heading with a Subtitle</h3>
                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                </header>
                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                <header>
                    <h4>Heading with a Subtitle</h4>
                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                </header>
                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

                <hr />

                <h2>Heading Level 2</h2>
                <h3>Heading Level 3</h3>
                <h4>Heading Level 4</h4>
                <h5>Heading Level 5</h5>
                <h6>Heading Level 6</h6>

                <hr />

                <h4>Blockquote</h4>
                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>

                <h4>Preformatted</h4>
                
            </section>

      


            <section>
                <h3>Lists</h3>
                <div className="row">
                    <div className="col-6 col-12-small">

                        <h4>Unordered</h4>
                        <ul>
                            <li>Dolor pulvinar etiam magna etiam.</li>
                            <li>Sagittis adipiscing lorem eleifend.</li>
                            <li>Felis enim feugiat dolore viverra.</li>
                        </ul>

                        <h4>Alternate</h4>
                        <ul className="alt">
                            <li>Dolor pulvinar etiam magna etiam.</li>
                            <li>Sagittis adipiscing lorem eleifend.</li>
                            <li>Felis enim feugiat dolore viverra.</li>
                        </ul>

                    </div>
                    <div className="col-6 col-12-small">

                        <h4>Ordered</h4>
                        <ol>
                            <li>Dolor pulvinar etiam magna etiam.</li>
                            <li>Etiam vel felis at lorem sed viverra.</li>
                            <li>Felis enim feugiat dolore viverra.</li>
                            <li>Dolor pulvinar etiam magna etiam.</li>
                            <li>Etiam vel felis at lorem sed viverra.</li>
                            <li>Felis enim feugiat dolore viverra.</li>
                        </ol>

                        <h4>Icons</h4>
                        <ul className="icons">
                            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                            <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                            <li><a href="#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
                        </ul>
                        <ul class="icons">
                            <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon alt fa-github"><span className="label">Github</span></a></li>
                            <li><a href="#" className="icon alt fa-dribbble"><span className="label">Dribbble</span></a></li>
                            <li><a href="#" className="icon alt fa-tumblr"><span className="label">Tumblr</span></a></li>
                        </ul>

                    </div>
                </div>

                <h4>Actions</h4>
                <ul className="actions">
                    <li><a href="#" className="button primary">Default</a></li>
                    <li><a href="#" className="button">Default</a></li>
                </ul>
                <ul className="actions small">
                    <li><a href="#" className="button primary small">Small</a></li>
                    <li><a href="#" className="button small">Small</a></li>
                </ul>
                <div className="row">
                    <div className="col-3 col-6-medium col-12-small">
                        <ul className="actions stacked">
                            <li><a href="#" className="button primary">Default</a></li>
                            <li><a href="#" className="button">Default</a></li>
                        </ul>
                    </div>
                    <div className="col-3 col-6-medium col-12-small">
                        <ul className="actions stacked">
                            <li><a href="#" className="button primary small">Small</a></li>
                            <li><a href="#" className="button small">Small</a></li>
                        </ul>
                    </div>
                    <div className="col-3 col-6-medium col-12-small">
                        <ul className="actions stacked">
                            <li><a href="#" className="button primary fit">Default</a></li>
                            <li><a href="#" className="button fit">Default</a></li>
                        </ul>
                    </div>
                    <div className="col-3 col-6-medium col-12-small">
                        <ul className="actions stacked">
                            <li><a href="#" className="button primary small fit">Small</a></li>
                            <li><a href="#" className="button small fit">Small</a></li>
                        </ul>
                    </div>
                </div>
            </section>

       
            <section>
                <h3>Table</h3>
                <h4>Default</h4>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Item 1</td>
                                <td>Ante turpis integer aliquet porttitor.</td>
                                <td>29.99</td>
                            </tr>
                            <tr>
                                <td>Item 2</td>
                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                <td>19.99</td>
                            </tr>
                            <tr>
                                <td>Item 3</td>
                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                <td>29.99</td>
                            </tr>
                            <tr>
                                <td>Item 4</td>
                                <td>Vitae integer tempus condimentum.</td>
                                <td>19.99</td>
                            </tr>
                            <tr>
                                <td>Item 5</td>
                                <td>Ante turpis integer aliquet porttitor.</td>
                                <td>29.99</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"></td>
                                <td>100.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <h4>Alternate</h4>
                <div className="table-wrapper">
                    <table className="alt">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Item 1</td>
                                <td>Ante turpis integer aliquet porttitor.</td>
                                <td>29.99</td>
                            </tr>
                            <tr>
                                <td>Item 2</td>
                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                <td>19.99</td>
                            </tr>
                            <tr>
                                <td>Item 3</td>
                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                <td>29.99</td>
                            </tr>
                            <tr>
                                <td>Item 4</td>
                                <td>Vitae integer tempus condimentum.</td>
                                <td>19.99</td>
                            </tr>
                            <tr>
                                <td>Item 5</td>
                                <td>Ante turpis integer aliquet porttitor.</td>
                                <td>29.99</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"></td>
                                <td>100.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>

 

            <section>
                <h3>Buttons</h3>
                <ul className="actions">
                    <li><a href="#" className="button primary">Primary</a></li>
                    <li><a href="#" className="button">Default</a></li>
                </ul>
                <ul class="actions">
                    <li><a href="#" className="button primary large">Large</a></li>
                    <li><a href="#" className="button">Default</a></li>
                    <li><a href="#" className="button small">Default</a></li>
                </ul>
                <div className="row">
                    <div className="col-6 col-12-small">
                        <ul className="actions fit">
                            <li><a href="#" className="button primary fit">Fit</a></li>
                            <li><a href="#" className="button fit">Fit</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-12-small">
                        <ul className="actions fit small">
                            <li><a href="#" className="button primary fit small">Fit + Small</a></li>
                            <li><a href="#" className="button fit small">Fit + Small</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="actions">
                    <li><a href="#" className="button primary icon fa-download">Icon</a></li>
                    <li><a href="#" className="button icon fa-download">Icon</a></li>
                </ul>
                <ul className="actions">
                    <li><span className="button primary disabled">Primary</span></li>
                    <li><span className="button disabled">Default</span></li>
                </ul>
            </section>


            <section>
                <h3>Form</h3>
                <form method="post" action="#">
                    <div className="row gtr-uniform gtr-50">
                        <div className="col-6 col-12-xsmall">
                            <input type="text" name="name" id="name" value="" placeholder="Name" />
                        </div>
                        <div className="col-6 col-12-xsmall">
                            <input type="email" name="email" id="email" value="" placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <select className="category" id="category">
                                <option value="">- Category -</option>
                                <option value="1">Manufacturing</option>
                                <option value="1">Shipping</option>
                                <option value="1">Administration</option>
                                <option value="1">Human Resources</option>
                            </select>
                        </div>

                        <div className="col-4 col-12-small">
                            <input type="radio" id="priority-low" name="priority" checked/>
                            <label for="priority-low">Low Priority</label>
                        </div>
                        
                        <div className="col-4 col-12-small">
                            <input type="radio" id="priority-normal" name="priority"/>
                            <label for="priority-normal">Normal Priority</label>
                        </div>
                        <div className="col-4 col-12-small">
                            <input type="radio" id="priority-high" name="priority"/>
                            <label for="priority-high">High Priority</label>
                        </div>
                        <div className="col-6 col-12-small">
                            <input type="checkbox" id="copy" name="copy"/>
                            <label for="copy">Email me a copy of this message</label>
                        </div>
                        <div className="col-6 col-12-small">
                            <input type="checkbox" id="human" name="human" checked/>
                            <label for="human">I am a human and not a robot</label>
                        </div>
                        <div className="col-12">
                            <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" class="primary" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </section>

        
            <section>
                <h3>Image</h3>
                <h4>Fit</h4>
                <div class="box alt">
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-12"><span className="image fit"><img src={pic07} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic07} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic07} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic07} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                    </div>
                </div>

                <h4>Left &amp; Right</h4>
                <p><span className="image left"><img src={pic10} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                <p><span className="image right"><img src={pic11} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
            </section>

    </div>



    <div id="main" class="container medium">
				<header class="major">
					<h2>Contact (We are not using right now)</h2>
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




    <footer id="footer">
        <div className="container">
            <div className="row">
                <section className="col-4 col-12-medium about">
                    <h2>Augue eleifend<br />
                    faucibus et cubilia.</h2>
                    <p>Arcu porttitor ut massa adipiscing nascetur varius lorem ipsum ante ac vestibulum lacinia ante praesent. Iaculis porttitor turpis orci arcu et orci. Lobortis non commodo ante lorem ipsum porttitor turpis orci. Arcu porttitor massa lorem ipsum dolor amet consequat etiam.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">Erat vestibulum</a></li>
                    </ul>
                </section>
                <section className="col-4 col-6-medium col-12-small">
                    <h3>Updates</h3>
                    <ul className="updates">
                        <li>
                            <p><a href="#">Ante ac vestibulum lacinia praesent adipiscing nascetur consequat lorem ipsum dolore.</a></p>
                            <span className="timestamp">Posted 2 hours ago</span>
                        </li>
                        <li>
                            <p><a href="#">Mi eu gravida tortor. Commodo lacinia ut ante placerat. In lobortis ac accumsan tortor.</a></p>
                            <span className="timestamp">Posted 4 hours ago</span>
                        </li>
                        <li>
                            <p><a href="#">Erat faucibus lacinia orci vestibulum massa accumsan ac vitae turpis praesent non.</a></p>
                            <span className="timestamp">Posted 8 hours ago</span>
                        </li>
                    </ul>
                </section>
                <section className="col-4 col-6-medium col-12-small">
                    <h3>Get in touch</h3>
                    <ul className="labeled-icons">
                        <li>
                            <h4 className="icon alt fa-home"><span className="label">Address</span></h4>
                            <span>1234 Somewhere Road #80486<br />
                            Nashville, TN 00000</span>
                        </li>
                        <li>
                            <h4 className="icon alt fa-phone"><span className="label">Phone</span></h4>
                            <span>(800) 555-0000 x12345</span>
                        </li>
                        <li>
                            <h4 className="icon alt fa-envelope"><span className="label">Email</span></h4>
                            <a href="#">hello@untitled.tld</a>
                        </li>
                        <li>
                            <h4 className="icon alt fa-facebook"><span className="label">Facebook</span></h4>
                            <a href="#">facebook.com/untitled-tld</a>
                        </li>
                        <li>
                            <h4 className="icon alt fa-twitter"><span className="label">Twitter</span></h4>
                            <a href="#">twitter.com/untitled-tld</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <div className="copyright container">
            <p>&copy; Untitled. All rights reserved.</p>
            <ul className="menu">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </footer>
    </div>
    );
  }
}

export default EntireTemplate;
