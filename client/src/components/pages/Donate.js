import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
<<<<<<< HEAD
import pic05 from '../../images/pic05.jpg';
=======
import '../../assets/css/donation.css';
import pic07 from '../../images/pic07.jpg';
>>>>>>> c79ac7a34c07aaa18e37f8683cc3b7ef6c668c46
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
<<<<<<< HEAD
  render() {
    return (
        <div>
        <Header />
        <div id="main" className="container">
						
		<section>			
			<p  style = {{textAlign:"left", fontSize: "24px"}}><a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><span class="image left my-inline"><img src={pic05} alt="" /></span></a>
            <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><h2 className="my-inline" style={{textAlign: "left"}}>Click Here to Donate through <br/>Salt Lake Education Foundation ❤️</h2></a>We hope you will consider donating to East High School Student and Family Support through the Salt Lake Education Foundation (SLEF).  Any contribution will help make a student's future brighter. 100% of your donation goes toward the initiative of your choice.  Simply choose the donation amount, and scroll down and <span style={{whiteSpace: "pre"}}>highlight  </span>
            <a style={{ textDecoration: "none"}} href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><span className="my-inline" style={{color:"#CC0033"}}>"STUDENT AND FAMILY SUPPORT"</span></a> in the Designation tag.  When students have their basic needs met, they are capable and empowered to succeed in school and in life! Donations are tax deductible and you will receive a receipt directly from SLEF.  Thank you for your generosity.</p>
            <hr/>
		</section>




        </div>
        <Footer />
        </div>
       );
  }
=======
    render() {
        return (
            <div>
                <Header />
                <div id="main" className="container">
                    <section id="content">
                        <a href="#" className="image fit"><img src={pic07} alt="" /></a>
                        <h3>Every Donation Counts!</h3>
                        <p>Hello, thank you for taking an interest in helping to support to students of East High School.Approximately 64% of the student body 
                            is living below the poverty line (including 85 homeless students). The East High Student and Family Support Initiative was created 
                            in 2016 to assist these students. We evaluate and fulfill the unique needs of each student, to assure that they have their basic 
                            needs met. This includes some dental and vision assistance. At East we feel that if the  is not worrying about pain, food, clothing,
                            and cleanliness, they will be better able to thrive in school and in life.</p>
                        <p>Every donation, no matter how big or small, will help improve the lives of hundreds of students!</p>
                        <p>All donations will be go through the Salt Lake Education Foundation! Please Click on the Button below to get started!</p>
                        <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/digital-inclusion-initiative-donation" 
                            className="button primary small fit">Donate Now!
                        </a>
                        
                        <br /><br />
                        <h3>How Your Donations Will Help Support East High Students</h3>
                        <div className="col-12 col-12-medium">
                            <br /><br />
                            <ul className="major-icons row">
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={snack} id="snack" alt="" /></span>
                                    <p>$1.00</p>
                                    <p>a healthy afterschool snack (we serve 100 per day)</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={soap} id="soap" alt="" /></span>
                                    <p>$5.00</p>
                                    <p>a month’s hygiene for a family</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={schoolSupplies} id="schoolSupplies" alt="" /></span>
                                    <p>$10.00</p>
                                    <p>school supplies for a semester</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={socks} id="socks" alt="" /></span>
                                    <p>$25.00</p>
                                    <p>20 pair of new men’s socks</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={towels} id="towels" alt="" /></span>
                                    <p>$50.00</p>
                                    <p>towels for the Washrooms for a semester</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={glasses} id="glasses" alt="" /></span>
                                    <p>$50.00</p>
                                    <p>replacement frames for a student’s glasses</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={protein} id="protein" alt="" /></span>
                                    <p>$100.00</p>
                                    <p>protein for the entire Stash for a week</p>
                                </li>
                                <li className="col-3 col-6-small col-12-xsmall">
                                    <span className="icon alt major"><img src={laptop} id="laptop" alt="" /></span>
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
>>>>>>> c79ac7a34c07aaa18e37f8683cc3b7ef6c668c46
}

export default Donate;