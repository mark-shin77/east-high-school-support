import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic07 from '../../images/pic07.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import laptop from '../../images/laptop.png';
import protein from '../../images/protein.png';
import snack from '../../images/snack.png';
import soap from '../../images/soap.png';
import socks from '../../images/socks.png';
import towels from '../../images/towels.png';
import glasses from '../../images/glasses.png';
import schoolSupplies from '../../images/school-supplies.png';

class Donate extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="main" className="container">
                    <header className="major">
                        <h2>No Sidebar</h2>
                        <p>Faucibus neque adipiscing mi lorem semper blandit sed consequat</p>
                    </header>


                    <section id="content">
                        <a href="#" className="image fit"><img src={pic07} alt="" /></a>
                        <h3>Dolore Amet Consequat</h3>
                        <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>
                        <p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique.</p>
                        <h3>How Your Donations Will Help East High Students</h3>
                        <div className="col-12 col-12-medium">
                        <br/><br/>
                            <ul className="major-icons row">
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={snack} alt="" /></span>
                                    <p>$1.00</p>
                                    <p>a healthy afterschool snack (we serve 100 per day)</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={soap} alt="" /></span>
                                    <p>$5.00</p>
                                    <p>a month’s hygiene for a family</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={schoolSupplies} alt="" /></span>
                                    <p>$10.00</p>
                                    <p>school supplies for a semester</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={socks} alt="" /></span>
                                    <p>$25.00</p>
                                    <p>20 pair of new men’s socks</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={towels} alt="" /></span>
                                    <p>$50.00</p>
                                    <p>towels for the Washrooms for a semester</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={glasses} alt="" /></span>
                                    <p>$50.00</p>
                                    <p>replacement frames for a student’s glasses</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={protein} alt="" /></span>
                                    <p>$100.00</p>
                                    <p>protein for the entire Stash for a week</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={laptop} alt="" /></span>
                                    <p>$150.00</p>
                                    <p>a NEW laptop, loaded with software</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Donate;