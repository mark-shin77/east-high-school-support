import ReactGA from 'react-ga';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


    function initializeReactGA() {
        ReactGA.initialize('UA-134365368-1');
        ReactGA.pageview('/');
    }
    
initializeReactGA()
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
