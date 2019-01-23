import React, { Component } from "react";
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import Header from '../Header';
import TableSamples from '../TableSamples'
import Footer from '../Footer';

class Inspect extends Component {
  render() {
    return (
        <div>
        <Header />

       
                <section id="content">
                    <h1>Using this to veiw two table samples</h1>
                    <h1>THESE LINES LOOK WEIRD - because are NOT in container</h1>
                    <h2>Use this page for development - to cut and paste from other components to sample other layouts</h2>
                    <h2>Be sure to add the photos above, then other components.  Included is Header and Footer</h2>

                </section>
        <TableSamples />
     
        <Footer />
        </div>
       );
  }
}

export default Inspect;