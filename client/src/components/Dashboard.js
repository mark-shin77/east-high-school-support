import React from "react"
import {withRouter} from "react-router-dom"
//import RenderToLayer from "material-ui/internal/RenderToLayer";
const Dashboard =props=>{
   
    console.log(props)
    if(props.loggedIn){
        
            return(
                <div>
                    <h3>Hello </h3>
                </div>
            )
        
    }
    else {
        return(
            <div>
                <h1>You are not authorized to be here</h1>
                <button onClick={window.location="/admin"}>Login</button>
            </div>
        )
    }
}

export default Dashboard