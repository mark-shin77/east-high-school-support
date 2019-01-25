import React, {Component} from "react"
class Dashboard  extends Component{
    constructor(props){
       super(props)
       this.state={
         loggedIn: this.props.location.state
       }
    }
    
    authorize = ()=>{
        if (this.state.loggedIn){
            return(
                <div>
                    <h3>Hello</h3>
                </div>
            )
        }
        else{ return(
            <div>
                <h3>Youre not authorized to be here login</h3>
                <button onClick={window.location="/admin"}>Login</button>
            </div>
        )}
    }
    render(){
        console.log(this.state)
        if(this.state.loggedIn){
            return(
                <div>
                    <h3>Hello</h3>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h3> Youre not authorized to be here please login</h3>
                    <button onClick={window.location="/admin"}>Login</button>
                </div>
            )
        }
    // if(props.loggedIn){
        
    //         return(
    //             <div>
    //                 <h3>Hello </h3>
    //             </div>
    //         )
        
    // }
    // else {
    //     return(
    //         <div>
    //             <h1>You are not authorized to be here</h1>
    //             <button onClick={window.location="/admin"}>Login</button>
    //         </div>
    //     )
    // }
   }
}

export default Dashboard