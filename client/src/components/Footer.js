import React, { Component } from "react";
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";

class Footer extends Component {
  render() {
    return (
         
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

       );
  }
}

export default Footer;
