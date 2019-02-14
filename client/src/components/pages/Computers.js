import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic23 from '../../images/pic23.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Computers extends Component {
  render() {
    return (
    <div>
    <Header />
            
    <div id="main" className="container">

        <div className="row gtr-150"> 
            <div className="col-6-xlarge col-12-small">
                <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/digital-inclusion-initiative-donation"><span className="image fit my-inline"><img src={pic23} alt="" /></span></a>
                </div>

            <div className="col-6-xlarge col-12-small"> 
                <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/digital-inclusion-initiative-donation"><h2 className="my-inline" style={{textAlign:"left"}}>Click Here to support the <span style = {{color: "#cc0033"}}>Digital inclusion Initiative</span> through Salt Lake Education Foundation 💻</h2></a>


                <p style = {{textAlign:"left"}}>
                Through a partnership with Comcast, students and their families can purchase a laptop or desktop computer for just $149. These computers come pre-loaded with the software students need for school work; however, we need your help to ensure that all students can receive a much needed computer. We are asking the community to help us make these computers free to low-income students. A donation of any amount is greatly appreciated.<span style = {{fontWeight: "bold"}}> A gift of $150 would provide a student with a way to complete homework. </span>
                <br/>
                Every student needs a working computer to be successful, and with your help we can make this a reality.
                One-hundred percent of the proceeds from your donation will go to place these much-needed items in our schools. Please call (801) 578-8258 or <a href="mailto:cultivating.resources@saltlakeeducationfoundation.org">email</a> if you would like more information.</p>
                </div>
            </div>
        
        <header >
			<a href="https://give.saltlakeeducationfoundation.org/easthighalumni/digital-inclusion-initiative-donation"><h2 style = {{textAlign:"left"}}>Please Support the Digital  Initiative at <span style={{color: "#cc0033"}}>
            East High School</span></h2></a>
			<p style = {{textAlign:"left"}}>
            Donations are tax deductible and you will receive a receipt directly from SLEF. East High School is a rigorous and diverse public school of 2,000 students. Approximately 64% live below the poverty line, receiving free/reduced breakfasts and lunches, with close to 400 Refugee students and between 85 and 95 students are homeless. The East High Student and Family Support Initiative was created in 2016 to assist these students and their families. A generous gift of $150 would provide one of these computers to help them be successful in high school.
            </p>
            <p style = {{textAlign:"left"}}>One-hundred percent of the proceeds from your donation will go to place these much-needed items in our schools. Please call (801) 578-8258 or email <a href="mailto:cultivating.resources@saltlakeeducationfoundation.org">cultivating.resources@saltlakeeducationfoundation.org</a> if you woul like more information.</p>
		</header>
        <hr/>
	</div>
    <Footer />
    </div>
    );
  }
}

export default Computers;