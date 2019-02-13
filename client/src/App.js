import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/main.css'
import "./assets/css/font-awesome.min.css";
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
 import Admin from './components/pages/Admin';
import Contact from './components/pages/Contact';
import Donate from './components/pages/Donate';
import FoodDonation from './components/pages/FoodDonation';
import Hours from './components/pages/Hours';
import Inspect from './components/pages/Inspect';
import Volunteer from './components/pages/Volunteer';
import SignupForm from './components/signUp';
import Dashboard from './components/Dashboard';
import Computers from './components/pages/Computers';
import AddUser from './components/pages/AddUser';
import ChangePassword from "./components/pages/ChangePassword";


function App() {
    // ReactGA.initialize('UA-134365368-1')
    //console.log(ga.q)
    return (
      
      <Router>
          <Switch>
              <ScrollToTop>
                    <Route exact path="/" component={Home} />
                    <Route path="/admin" component={Admin} /> 
                    <Route path="/contact" component={Contact} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/fooddonation" component={FoodDonation} />
                    <Route path="/hours" component={Hours} />
                    <Route path="/inspect" component={Inspect} />
                    <Route path="/volunteer" component={Volunteer} />
                    <Route path="/signup" component={SignupForm}/>
                    <Route path="/computers" component={Computers} />
                    <Route exact path="/dash" component={Dashboard} loggedIn={false}/>
                    <Route exact path="/add/user" component={AddUser}/>
                    <Route exact path="/change/password" component={ChangePassword}/>
              </ScrollToTop>
          </Switch>
      </Router>
    );
  }


export default App;
