import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic30 from '../../images/pic30.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class Volunteer extends Component {
    render() {
      return (
          <div>
        <Header />   
        
        <div id="main" className="container">

        <section>			
			<p  style = {{textAlign:"left", fontSize: "24px"}}><a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><span className="image left my-inline"><img src={pic30} alt="" /></span></a>
            <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><h2 className="my-inline" style={{textAlign: "left"}}>Volunteer Opportunities <br/>East Student & Family Support ❤️</h2></a>The success of this program is highly dependent on our volunteers. We have endless service opportunities for students, teachers, parents and members of the community to help keep the Leopard Stash, Leopard Boutique and Leopard Washroom stocked and running smoothly. Click on the Sign-up Genius link below to find times that work for you!  We also have service opportunities in our school for after-school tutors, classroom assistants and more.  For more specific information as to how you can help, please contact <a href={"mailto:" + "kris.barta@slcschools.org"}>kris.barta@slcschools.org</a>.  Follow us on <a href="https://www.instagram.com/ehsstudentandfamilysupport/">instagram</a> for updates as to how local businesses, friends and neighbors are supporting East High.</p>
            <br/>
		</section>
          

        </div>        
              
        <Footer />
        </div>
        );
    }
  }
  
  export default Volunteer;