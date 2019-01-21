import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";

class Work extends Component {
  render() {
    return (
      
   
	    <article id="work" className="wrapper style2">
      <div className="container">
        <header>
          <h2>Here's all the stuff I do.</h2>
          <p>Odio turpis amet sed consequat eget posuere consequat.</p>
        </header>
        <div className="row aln-center">
          <div className="col-4 col-6-medium col-12-small">
            <section className="box style1">
              <span class="icon featured fa-comments-o"></span>
              <h3>Consequat lorem</h3>
              <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
            </section>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section className="box style1">
              <span className="icon featured fa-camera-retro"></span>
              <h3>Lorem dolor tempus</h3>
              <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
            </section>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section className="box style1">
              <span className="icon featured fa-thumbs-o-up"></span>
              <h3>Feugiat posuere</h3>
              <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
            </section>
          </div>
        </div>
        <footer>
          <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
          <a href="#portfolio" className="button large scrolly">See some of my recent work</a>
        </footer>
      </div>
    </article>


   

    );
  }
}

export default Work;
