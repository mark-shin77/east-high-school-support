import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic34 from '../../images/pic34.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class Contact extends Component {
    render() {

        return (
            <div>
                <Header />
                <div id="main" className="container">
                    <img className = "image fit" src={pic34} alt="" />
                    <section id="content">
                        <div className="contactWrapper"
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                padding: "15px"
                            }}>
                            <a href={"mailto: kris.barta@slcschools.org"}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ marginRight: "20px" }}>
                                        <div className="icon alt fa-envelope" style={{ cursor: "pointer", fontSize: "5em", paddingTop: "60px" }} alt=""></div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: "1px" }}>
                                        <div style={{ paddingLeft: "10px", paddingTop: "60px" }}>
                                            <h4 className="contacty" style={{ width: "190px" }}>Kris Barta</h4></div>
                                        <div style={{ paddingLeft: "10px", width: "240px" }}><h4 className="contacty">kris.barta@slcschools.org</h4></div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://maps.google.com/?ll=40.750867,-111.854866">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ marginRight: "20px" }}>
                                        <div className="icon alt fa-home" style={{ cursor: "pointer", fontSize: "5em", paddingTop: "60px", color: "#cc3333" }}></div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: "1px" }}>
                                        <div style={{ paddingLeft: "10px", paddingTop: "60px" }}><h4 className="contacty" style={{ width: "210px" }}>840 South 1300 East</h4></div>
                                        <div style={{ paddingLeft: "10px" }}><h4 style={{ width: "200px" }} className="contacty">SLC, UT 84102</h4></div>
                                    </div>
                                </div>
                            </a>
                            <a className="noUnderline" href="tel:8015831661" style={{ textDecoration: "none" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ marginRight: "20px" }}>
                                        <div className="icon alt fa-phone" style={{ cursor: "pointer", fontSize: "5em", paddingTop: "60px" }}></div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: "1px" }}>
                                        <div style={{ paddingLeft: "10px", paddingTop: "60px" }}><h4 className="contacty" style={{ width: "140px" }}>801-583-1661</h4></div>
                                        <div style={{ paddingLeft: "10px" }}><h4 className="contacty" style={{ width: "110px" }}>ex. 2338</h4></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <br/>
                        <h3>About our School</h3>
                        <p>East High School is a rigorous and diverse public school of 2,000 students. Approximately 64% of the student body is living below the poverty line (including 85 homeless students). The East High Student and Family Support Initiative was created in 2016 to assist these students. We evaluate and fulfill the unique needs of each student, to assure that they have their basic needs met. This includes some dental and vision assistance. At East we feel that if the student is not worrying about pain, food, clothing, and cleanliness, they will be better able to thrive in school and in life.
                            <br />
                            <br />
                            To that end, the Leopard Stash (food pantry) provides healthy snacks and meal making materials for students and their families. The Stash is open before and after school each day. The Leopard Boutique is our own "clothing store" where students and families find new and gently used clothing, shoes and jackets. The newly completed Leopard Washrooms provide a clean and safe place for our homeless and vulnerable students to wash clothing, shower and prepare for their school day. The Washrooms are stocked with items for the student and their family, including new underwear, socks, towels and every possible shower/bathroom product needed. We hope, with support from donors, to soon facilitate scholarship offerings, work internships and summer jobs for hardworking students that need a little extra help during tough times.
                                    <br />
                            <br />
                            All of these services are provided free of charge to any of our students and their families. These programs are supported 100% through in-kind gifts and cash, generously donated by East High students, families, PTA and an amazing community of individuals and companies who LOVE EAST and want to help each student succeed!.</p>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;