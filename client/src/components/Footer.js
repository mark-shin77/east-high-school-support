import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";

class Footer extends Component {
  render() {
    return (
         
        <footer id="footer">
        <div className="container">
            <div className="row">
                <section className="col-4 col-12-medium about">
                    <h2>Thank you donors!</h2>
                    <p>These programs are supported 100% through in-kind gifts and cash, generously donated by East High students, families, PTA and an amazing community of individuals and companies who LOVE EAST and want to help each student succeed!</p>
                    <ul className="actions">
                        <li><Link to="/donate" className="button">Support East High</Link></li>
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
                            <a href="https://maps.google.com/?ll=40.750867,-111.854866">
                            <h4 className="icon alt fa-home"><span className="label">Address</span></h4>
                            <span>840 South 1300 East<br />
                            Salt Lake City, UT 84102</span>
                            </a>
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
    </footer>

       );
  }
}

export default Footer;
