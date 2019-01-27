import React, { Component, Fragment } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import pic13 from '../../images/pic13.jpg';
import pic14 from '../../images/pic14.jpg';
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

    loadAvailableTimeSlots = (id) => {
        console.log(id)
        API.getReport(id)
            .then(res => {
                this.setState({ availableTimeSlots: res.data.data.signup });
                console.log(this.state.signupid);
            })
            .catch(err => console.log(err))
    }

    render() {
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
                                        <ActiveSignupList activeSignUpResults={this.state.activeSignUpResults} getTimeSlots= {this.loadAvailableTimeSlots}/>
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
                                    {/* {this.state.availableTimeSlots.length > 0 &&
                                        <Fragment>
                                            <h3>Available Slots</h3>
                                            <AvailableTimeSlots availableTimeSlots={this.state.availableTimeSlots} />
                                        </Fragment>
                                    } */}
                                    { this.state.availableTimeSlots.length > 0 ? 
                                        <Fragment>
                                            <AvailableTimeSlots availableTimeSlots={this.state.availableTimeSlots} />
                                        </Fragment> 
                                        : 
                                        <Fragment>
                                            <p>Hello</p>
                                        </Fragment>
                                    }
                                    {/* <AvailableTimeSlots availableTimeSlots={this.state.availableTimeSlots} /> */}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Volunteer;