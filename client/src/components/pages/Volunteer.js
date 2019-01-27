import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic30 from '../../images/pic30.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import API from '../../utils/API';
import ActiveSignupList from './../ActiveSignupList';
import AvailableTimeSlots from './../AvailableTimeSlots';


class Volunteer extends Component {
    state = {
        signupid: "",
        activeSignUpResults: [],
        availableTimeSlots: []
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

    loadAvailableTimeSlots = () => {
        API.getReport({})
            .then(res => {
                this.setState({ availableTimeSlots: res.data.data.signup, signupid: res.data.data.signup.signupid });
                console.log(this.state.signupid);
            })
            .catch(err => console.log(err))
    }

    render() {
<<<<<<< HEAD
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
=======
        return (
            <div>
                <Header />
                <div id="main" className="container">
                    <header class="major">
                        <h2>Left Sidebar</h2>
                        <p>Faucibus neque adipiscing mi lorem semper blandit sed consequat</p>
                    </header>
                    <div className="row gtr-150">
                        <div className="col-4 col-12-medium">

                            <section id="sidebar">
                                <section>
                                    <div className="active">
                                        <h3>Available Events</h3>
                                        <ActiveSignupList activeSignUpResults={this.state.activeSignUpResults} />
                                    </div>
                                </section>
                                <hr />
                                <section>
                                    <footer>
                                        <ul className="actions">
                                            <li><a href="#" className="button small alt">Learn More</a></li>
                                        </ul>
                                    </footer>
                                </section>
                            </section>

                        </div>
                        <div className="col-8 col-12-medium imp-medium">


                            <section id="content">
                                <a href="#" className="image fit"><img src={pic13} alt="" /></a>
                                <div className="openslots">
                                    <h3>Available Slots</h3>
                                    <AvailableTimeSlots availableTimeSlots={this.state.availableTimeSlots} />
                                </div>
                            </section>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
>>>>>>> c79ac7a34c07aaa18e37f8683cc3b7ef6c668c46
        );
    }
}

export default Volunteer;