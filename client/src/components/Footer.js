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
                        <li><a href="#" className="button">Support East High</a></li>
                    </ul>
                </section>
                <section className="col-4 col-6-medium col-12-small">
                    <h3>Updates</h3>
                    <ul className="updates">
                        <li>
                            <p><a href="https://www.sltrib.com/news/2018/11/20/big-donation-boosts-east">A big donation boosts East High’s pantry; for many districts, food help has become ‘something that our schools can’t do without’</a></p>
                            <span className="timestamp">Posted 2 hours ago</span>
                        </li>
                        <li>
                            <p><a href="https://www.deseretnews.com/article/900043095/3-year-smiths-gift-extends-reach-of-east-highs-food-pantry.html">3-year Smith's gift extends reach of East High's food pantry</a></p>
                            <span className="timestamp">Posted 4 hours ago</span>
                        </li>
                        <li>
                            <p><a href="https://fox13now.com/2018/11/20/major-donation-helps-utah-high-school-students-provide-food-for-friends/">Major donation helps Utah high school students provide food for friends</a></p>
                            <span className="timestamp">Posted 8 hours ago</span>
                        </li>
                    </ul>
                </section>
                <section className="col-4 col-6-medium col-12-small">
                    <h3>Get in touch</h3>
                    <ul className="labeled-icons">
                        <li>
                            <h4 className="icon alt fa-home"><span className="label">Address</span></h4>
                            <span>840 South 1300 East<br />
                            Salt Lake City, UT 84102</span>
                        </li>
                        <li>
                            <a href="tel:8015831661">
                            <h4 className="icon alt fa-phone"><span className="label">Phone</span></h4>
                            <span>(801) 583-1661 x2338</span></a>
                        </li>
                        <li>
                            <a href={"mailto:" + "kris.barta@slcschools.org"}>
                            <h4 className="icon alt fa-envelope" style={{cursor: "pointer"}}> <span className="label">Email</span></h4>
                            kris.barta@slcschools.org</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ehsstudentandfamilysupport/">
                            <h4 className="icon alt fa-instagram" style={{cursor: "pointer"}}><span className="label">Instagram</span></h4>
                            EHS Student and Family Support</a>
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
