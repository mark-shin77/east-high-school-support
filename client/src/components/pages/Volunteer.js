import React, { Component, Fragment } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic30 from '../../images/pic30.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import API from '../../utils/API';
import ActiveSignupList from './../ActiveSignupList';
import FadeIn from '../FadeIn/FadeIn';


class Volunteer extends Component {
    state = {
        signupid: "",
        activeSignUpResults: [],
        availableTimeSlots: [],
        selectedSignup: {}
    }

    componentDidMount() {
        this.loadActiveSignups();
        this.loadAvailableTimeSlots();
    }

    loadActiveSignups = () => {
        API.getActiveSignups()
            .then(res => {
                this.setState({ activeSignUpResults: res.data.data });
            })
            .catch(err => console.log(err))
    }

    loadAvailableTimeSlots = (id) => {
        API.getReport(id)
            .then(res => {
                this.setState({ availableTimeSlots: res.data.data.signup });
            })
    }

    selected = (id) => {
        console.log('this is the id i need',id)
        let found = this.state.activeSignUpResults.find((item) => item.signupid === id)
        this.setState({ selectedSignup: found})
        console.log(found)
    }

    render() {
        return (
            <div>
                <Header />
                <div id="main" className="container">
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <section id="sidebar">
                                <section>
                                    <div className="active">
                                        <h2 style={{textAlign: 'center'}}>Available Events</h2>
                                        <ActiveSignupList 
                                            activeSignUpResults={this.state.activeSignUpResults} 
                                            getTimeSlots={this.loadAvailableTimeSlots} 
                                            selectedSignup={(id)=>this.selected(id)}
                                        />
                                    </div>
                                </section>
                            </section>
                        </div>

                        <div className="col-8 col-12-medium imp-medium">
                            <section id="content">
                                <div className="openslots">
                                    {this.state.availableTimeSlots.length > 0 ?
                                        <FadeIn 
                                            availableTimeSlots={this.state.availableTimeSlots} 
                                            selectedSignup={this.state.selectedSignup}
                                        />
                                        :
                                        <Fragment>
                                            <div style={{ textAlign: "left", fontSize: "24px" }}>
                                                <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift">
                                                    <span className="image left my-inline">
                                                        <img src={pic30} alt="" />
                                                    </span>
                                                </a>
                                                <a href="https://give.saltlakeeducationfoundation.org/easthighalumni/give-a-gift">
                                                    <h2 className="my-inline" style={{ textAlign: "left", paddingTop: "50px" }}>Volunteer Opportunities <br />East Student & Family Support ❤️</h2>
                                                </a>
                                            </div>
                                            <br/>
                                            <br/>
                                            <div>
                                                The success of this program is highly dependent on our volunteers. We have endless service opportunities for students, 
                                                teachers, parents and members of the community to help keep the Leopard Stash, Leopard Boutique and Leopard Washroom 
                                                stocked and running smoothly. Click on the Sign-up Genius link below to find times that work for you!  We also have 
                                                service opportunities in our school for after-school tutors, classroom assistants and more.  For more specific information 
                                                as to how you can help, please contact <a href={"mailto: kris.barta@slcschools.org"}> <span className="my-inline"> kris.barta@slcschools.org</span> </a>.  
                                                Follow us on <a href="https://www.instagram.com/ehsstudentandfamilysupport/"> <span className="my-inline" style={{color:"#cc3333"}}>instagram </span></a> for updates as to how local 
                                                businesses, friends and neighbors are supporting East High.
                                            </div>
                                            <br />
                                        </Fragment>
                                    }
                                </div>
                            </section>
                        </div>
                    </div>
                <div>

            <hr/>
            <header className="major">
                <h2>Community Servic<span style={{fontVariant: 'small-caps', color:'#CC0033'}}>e</span> Opportuniti<span style={{fontVariant: 'small-caps', color:'#CC0033'}}>e</span>s</h2>
            </header>

                
            <div className="row">
			    <div className="col-4 col-12-small">
                    <a href="https://mountainview.slcschools.org/"><h4 className="my-inline">Mountain View Elementary:</h4></a>
                    <p>Contact Christine Tuirfua and/or Wendy Morse <br/>
                    <a href="tel:8019748315"> (801) 974-8315</a></p>

                    <a href="https://riley.slcschools.org/"><h4 className="my-inline">Riley Elementary:</h4></a>
                    <p>Contact Ronald Urbin <br/>
                    <a href="tel:8019748310"> (801) 974-8310</a></p>
                    
                    <a href="https://franklin.slcschools.org/"><h4 className="my-inline">Franklin Elementary:</h4></a>
                    <p>Contact Mike Sadler <br/>
                    <a href="tel:8015788158"> (801) 578-8158</a></p>

                    <a href="https://parkview.slcschools.org/"><h4 className="my-inline">Parkview Elementary:</h4></a>
                    <p>Contact Administration <br/>
                    <a href="tel:8019748374"> (801) 974-8374</a></p>
                    
                    <a href="http://east.slcschools.org/"><h4 className="my-inline">United Service @East (USE):</h4></a>
                    <p>Sign up in the counseling office. <br/>
                    <a href="tel:8015831661"> (801) 583-1661</a></p>
                    
                    <a href="http://east.slcschools.org/"><h4 className="my-inline">Brown Bag Lunch Series:</h4></a>
                    <p>East High Lectures during lunch. <br/>
                    <a href="tel:8015831661"> (801) 583-1661</a></p>
                    
                    <a href="http://utahanimals.org/"><h4 className="my-inline">Utah Animal Adoption Center:</h4></a>
                    <p>Find out more on the website. <br/>
                    <a href="tel:8013557387">(801) 355-PETS (7387)</a></p>

                    <a href="http://www.guadschool.org/"><h4 className="my-inline">Guadalupe School:</h4></a>
                    <p>Transforming lives through education since 1966. <br/>
                    <a href="tel:8015316100"> (801) 531-6100</a></p>

                </div>

			    <div className="col-4 col-12-small">
                    <a href="https://utah.bestfriends.org/node/72/"><h4 className="my-inline">No More Homeless Pets:</h4></a>
                    <p>Contact information on the website. <br/>
                    <a href="tel:8015742454"> (801) 574-2454</a></p>
                    
                    <a href="https://slco.org/aging-adult-services/volunteer/"><h4 className="my-inline">Salt Lake County Aging Services:</h4></a>
                    <p>Please call to become an Aging and Adult Services Volunteer today. <br/>
                    <a href="tel:3854683200"> (385) 468-3200</a></p>

                    <a href="https://www.redbuttegarden.org/volunteer-twigs/"><h4 className="my-inline">Red Butte Garden:</h4></a>
                    <p>(TWIGS) Teens Working in the garden. <br/>
                    <a href="tel: 801-585-0556"> (801) 585-0556</a></p>

                    <a href="https://www.facebook.com/bendintheriver/"><h4 className="my-inline">Bend-in-the-River:</h4></a>
                    <p>The Bend in the River is a dynamic community of partners caring for and utilizing a natural learning environment in an urban setting. <br/>
                    <a href="https://maps.google.com/?ll=40.728643,-111.838914"> <br/>
                    <span style={{color:"#cc3333"}}>1030 W Fremont Ave Salt Lake City, Utah</span></a></p>

                    <a href="https://intermountainhealthcare.org/locations/primary-childrens-hospital/giving-volunteering/volunteer/"><h4 className="my-inline">Primary Children's Medical Center:</h4></a>
                    <p>Contact Volunteer Services, Must be 16 years-old Juniors and Seniors only.  Call the first two weeks of each month and commit to six months. <br/>
                    <a href="tel:8016626560"> (801) 662-6560</a></p>

                    <a href="https://www.volunteermatch.org/"><h4 className="my-inline">Still looking for ideas:</h4></a>
                    <p>Listen to the East High daily announcements and refer to <a href="https://www.volunteermatch.org/"><span className="my-inline" style={{color:"#cc3333"}}>volunteermatch.org.</span></a> <br/>
                    <a href="tel:8015831661"> (801) 583-1661</a></p>

                </div>  

			    <div className="col-4 col-12-small">                     
                    <a href="https://bbbsu.org/"><h4 className="my-inline">Big Brothers Big Sisters of Utah:</h4></a>
                    <p>Contact the main office for more information.<br/>
                    <a href="tel:8013130303"> (801) 313-0303</a></p>

                    
                    <a href="https://www.discoverygateway.org/volunteer/"><h4 className="my-inline">Discovery Gateway:</h4></a>
                    <p>To become a volunteer, please contact Tammy Spicer. <br/>
                    <a href="tel:8014565437"> (801) 456-5437 x112</a></p>


                    <a href="https://womenofworld.org/"><h4 className="my-inline">Women of the World:</h4></a>
                    <p>Women of the World provides hope, support, supplies, education, and positivity to hundreds of women refugees and their families. <br/>
                    <a href="tel:8019530008"> (801) 953-0008</a></p>

                    
                    <a href="https://www.ccsutah.org/volunteer"><h4 className="my-inline">Catholic Community Services of Utah:</h4></a>
                    <p>Our biggest volunteer needs right now are for refugee mentors in Salt Lake City and refugee foster care tutors in Utah County. <br/>
                    <a href="tel:8019779119"> (801) 977-9119</a></p>


                    <a href="https://www.cuutah.org/"><h4 className="my-inline">Comunidades Unidas:</h4></a>
                    <p>We are a organization dedicated to Empowering the Latino Community in Utah to recognize and achieve their own potential and become a positive force for change in the larger community. <br/>
                    <a href="tel:8014874143"> (801) 487-4143</a></p>


                    <a href="https://www.theroadhome.org/volunteer/"><h4 className="my-inline">The Road Home:</h4></a>
                    <p>Help us provide programs to those in our community who are working to overcome homelessness. <br/>
                    <a href="tel:8013594142"> (801) 359-4142</a></p>

                </div>
            
            </div>

            </div>

            </div>
            <Footer />
        </div>
        );
    }
}

export default Volunteer;