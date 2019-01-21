import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";
import pic00 from "./images/pic00.jpg";

class Home extends Component {
  render() {
    return (
      

      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div className="col-4 col-5-large col-12-medium">
              <span className="image fit"><img src={pic00} alt="" /></span>
            </div>
            <div className="col-8 col-7-large col-12-medium">
              <header>
                <h1>Hi. I'm <strong>Jane Doe</strong>.</h1>
              </header>
              <p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
              <a href="#work" className="button large scrolly">Learn about what I do</a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Home;