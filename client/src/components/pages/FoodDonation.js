import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic05 from '../../images/pic05.jpg';
import pic31 from '../../images/pic31.jpg'
import pic32 from '../../images/pic32.jpg'
import pic33 from '../../images/pic33.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class FoodDonation extends Component {
  render() {
    return (
        <div>
        <Header />
        <section>        
        <div id="main" className="container">

        <header className="major" style={{textAlign: 'center'}}>
			<h2>Community Drop off: <br/>Wednesdays 2:45-3:15pm<br/> <span style={{color: "#cc0033"}}> East High School</span></h2>
			<p>840 S. 1300 E. SLC UT, 84102 
            <br/> Look for the students with the red cart!<br />
            Thank you for your generosity ❤️
            </p>
            
            
		</header>
        <hr/>

            <div className="row">
			    <div className="col-4-xlarge col-12-small">
                    <span className="image fit">
                        <img src={pic32} alt="" />
                        <span style={{textAlign: "center"}}>
                        <h3 >
                            Donations Needed
                        </h3>
                        </span>
                        <ul>
                            <li>New & gently used items sizes S-XXXL</li>
                            <li>Men's plaid button-down</li>
                            <li>Flannel tops</li>
                            <li>Men's & Women's socks</li>
                            <li>Men's Underwear all sizes</li>
                            <li>Plain White T-shirts all sizes</li>
                            <li>Women's underwear and bras all sizes</li>
                            <li>Fleece or lightweight jackets</li>
                            <li>Jeans, leggings and shorts</li>
                            <li>Sneakers and flip-flops</li>
                            <li>Hoodies</li>
                            <li>Walmart, Target, Old Navy Gift Cards in any amount</li>
                            <li>Formal dresses, used & new</li>
                        </ul>           
                    </span>
                </div>
			    <div className="col-4-xlarge col-12-small">
                <span className="image fit">
                        <img src={pic31} alt="" />
                        <span style={{textAlign: "center"}}>
                        <h3 >
                            Donations Needed
                        </h3>
                        </span>
                        <ul>
                            <li>5lb bags of flour</li>
                            <li>3lb bags of sugar</li>
                            <li>3lb of masa</li>
                            <li>Canned fruit</li>
                            <li>Cooking oil</li>
                            <li>Jars of peanut butter</li>
                            <li>Canned chicken, tuna & spam</li>
                            <li>Bags of beans and rice</li>
                            <li>Pasta sauce</li>
                            <li>Ziplock bags</li>
                            <li>Plastic utensils</li>
                            <li>Walmart, Target, Old Navy Gift Cards in any amount</li>
                        </ul>           
                    </span>
                </div>              
			    <div className="col-4-xlarge col-12-small">
                <span className="image fit">
                        <img src={pic33} alt="" />
                        <span style={{textAlign: "center"}}>
                        <h3 >
                            Donations Needed
                        </h3>
                        </span>
                        <ul>
                            <li>Currently Stocked</li>
                            <li>Thank you donors!</li>
                            <li>Check back for updates</li>

                        </ul>           
                    </span>
                </div>
            <hr />
            </div>
            <hr />
                
			<div style = {{textAlign:"left", fontSize: "24px"}}><a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><span className="image left my-inline"><img src={pic05} alt="" /></span></a>
            <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><h2 className="my-inline" style={{textAlign: "left"}}>Click Here to Donate through <br/>Salt Lake Education Foundation ❤️</h2></a>We hope you will consider donating to East High School Student and Family Support through the Salt Lake Education Foundation (SLEF).  Any contribution will help make a student's future brighter. 100% of your donation goes toward the initiative of your choice.  Simply choose the donation amount, and scroll down and <span style={{whiteSpace: "pre"}}>highlight  </span>
            <a style={{ textDecoration: "none"}} href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift"><span className="my-inline" style={{color:"#CC0033"}}>"STUDENT AND FAMILY SUPPORT"</span></a> in the Designation tag.  When students have their basic needs met, they are capable and empowered to succeed in school and in life! Donations are tax deductible and you will receive a receipt directly from SLEF.</div>
            </div>
		</section>
        <Footer />
        </div>
       );
  }
}

export default FoodDonation;