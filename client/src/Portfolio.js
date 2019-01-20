import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";
import pic01 from "./images/pic01.jpg";
import pic02 from "./images/pic02.jpg";
import pic03 from "./images/pic03.jpg";
import pic04 from "./images/pic04.jpg";
import pic05 from "./images/pic05.jpg";
import pic06 from "./images/pic06.jpg";
 

class Portfolio extends Component {
  render() {
    return (
      
   
<article id="portfolio" className="wrapper style3">
      <div className="container">
        <header>
          <h2>Here’s some stuff I made recently.</h2>
          <p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat.</p>
        </header>
        <div className="row">
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
               <a href="#" className="image featured"><img src={pic01} alt="" /></a>
              <h3><a href="#">Magna feugiat</a></h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured"><img src={pic02} alt="" /></a>
              <h3><a href="#">Veroeros primis</a></h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured"><img src={pic03} alt="" /></a>
              <h3><a href="#">Lorem ipsum</a></h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured"><img src={pic04} alt="" /></a>
              <h3><a href="#">Tempus dolore</a></h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured"><img src={pic05} alt="" /></a>
              <h3><a href="#">Feugiat aliquam</a></h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <article className="box style2">
              <a href="#" className="image featured"><img src={pic06} alt="" /></a>
              <h3><a href="#">Sed amet ornare</a></h3>
              <p>Ornare nulla proin odio consequat.</p>
            </article>
          </div>
        </div>
        <footer>
          <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
          <a href="#contact" className="button large scrolly">Get in touch with me</a>
        </footer>
      </div>
    </article>



   

    );
  }
}

export default Portfolio;
