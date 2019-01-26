import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/main.css'
import "./assets/css/font-awesome.min.css";
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Contact from './components/pages/Contact';
import Donate from './components/pages/Donate';
import FoodDonation from './components/pages/FoodDonation';
import Inspect from './components/pages/Inspect';
import Volunteer from './components/pages/Volunteer';

import SignupForm from './components/signUp';

function App() {
    return (
      
      <Router>
      
      <div>
      <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donate} />
            <Route path="/fooddonation" component={FoodDonation} />
            <Route path="/inspect" component={Inspect} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/signup" component={SignupForm}/>
        </ScrollToTop>
      </div>
      </Router>
    );
  }


export default App;
