import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/font-awesome.min.css";

class Contact extends Component {
  render() {
    return (
      
   
        <article id="contact" className="wrapper style4">
        <div className="container medium">
          <header>
            <h2>Have me make stuff for you.</h2>
            <p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
          </header>
          <div className="row">
            <div className="col-12">
              <form method="post" action="#">
                <div className="row">
                  <div className="col-6 col-12-small">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="col-6 col-12-small">
                    <input type="text" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <input type="text" name="subject" id="subject" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                  </div>
                  <div className="col-12">
                    <ul className="actions">
                      <li><input type="submit" value="Send Message" /></li>
                      <li><input type="reset" value="Clear Form" className="alt" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-12">
              <hr />
              <h3>Find me on ...</h3>
              <ul class="social">
                <li><a href="#" className="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
                <li><a href="#" className="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="#" className="icon fa-tumblr"><span class="label">Tumblr</span></a></li>
                <li><a href="#" className="icon fa-google-plus"><span class="label">Google+</span></a></li>
                <li><a href="#" className="icon fa-github"><span class="label">Github</span></a></li>
              
              </ul>
              <hr />
            </div>
          </div>
          <footer>
            <ul id="copyright">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </footer>
        </div>
      </article>


   

    );
  }
}

export default Contact;
