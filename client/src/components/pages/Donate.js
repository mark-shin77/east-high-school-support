import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic05 from '../../images/pic05.jpg';
import '../../assets/css/donation.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Donate extends Component {
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
}

export default Donate;