import React, { Component } from "react";
import "../assets/css/main.css";
import "../assets/css/font-awesome.min.css";
import pic09 from '../images/pic09.jpg';

class NoSidebar extends Component {
  render() {
    return (
         
        <div id="main" className="container">
        <header className="major">
            <h2>No Sidebar</h2>
            <p>Faucibus neque adipiscing mi lorem semper blandit sed consequat</p>
        </header>

       
            <section id="content">
                <a href="#" className="image fit"><img src={pic09} alt="" /></a>
                <h3>Dolore Amet Consequat</h3>
                <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>
                <p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique.</p>
                <h3>Sed Magna Ornare</h3>
                <p>In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in odio vulputate luctus. Suspendisse euismod lorem eget lacinia fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.</p>
                <ul>
                    <li>Faucibus orci lobortis ac adipiscing integer.</li>
                    <li>Col accumsan arcu mi aliquet placerat.</li>
                    <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
                    <li>Blandit massa non blandit tempor interdum.</li>
                    <li>Lacinia mattis arcu nascetur lobortis.</li>
                </ul>
            </section>

        </div>

       );
  }
}

export default NoSidebar;