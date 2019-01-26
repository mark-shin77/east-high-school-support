import React, {Component} from "react"
import '../assets/css/font-awesome.min.css';
import '../assets/css/main.css';
import pic08 from '../images/pic08.jpg';
import Header from './Header';
import Footer from './Footer';
import DashCard from './DashCards/Card';

class Dashboard  extends Component{
    constructor(props){
       super(props)
       this.state={
         loggedIn: this.props.location.state,
         token: localStorage.token
       }
    }
   componentDidMount(){
       if(!localStorage.token &&this.state.loggedIn){
           localStorage.setItem("token", "success")
       }
       return true
   }
    authorize = ()=>{
        if (this.state.loggedIn){
        }
        else{ return(
            <div>
                <h3>Youre not authorized to be here login</h3>
                <button onClick={window.location="/admin"}>Login</button>
            </div>
        )}
    }
    onClickTest =()=>{
        console.log("Testing")
    }
    render(){
        console.log(this.state)
        console.log(localStorage)
        if(this.componentDidMount){
            //it takes awhile for the token to update so it can take two conditions
        if(this.state.token ==="success"|| this.state.loggedIn){

            return(
                <div>
                    <Header/>
                    <div id="main" className="container">
                     <section id="content">
                <a href="#" className="image fit"><img src={pic08} alt="" /></a>
                <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                <DashCard name={"Volunteers"} onClick={this.onClick} > <p>Card For Volunteers</p></DashCard>
                <DashCard name ={"Food"} onClick={this.onClick}> <p>Card for Food</p> </DashCard>
                </div>
                
                <div className="col-4">
                <DashCard name = {'Expenses'} onClick={this.onClick}> <p>Card for Expenses</p> </DashCard>
                <DashCard name = {"Traffic"} onClick={this.onClick} > <p>Card for Traffic</p> </DashCard>
                </div>
                </div>
                </section>
                </div>
                <Footer/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h3> Youre not authorized to be here please login</h3>
                </div>
            )
        }
    }
   }
}

export default Dashboard