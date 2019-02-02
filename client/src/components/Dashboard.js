import React, {Component} from "react"
import '../assets/css/font-awesome.min.css';
import '../assets/css/main.css';
import pic08 from '../images/pic08.jpg';
import Footer from './Footer';
import DashCard from './DashCards/Card';
import axios from "axios"
import Volunteer from './pages/Volunteer';
import DashHeader from './DashHeader';
import FoodForm from "./foodDonate";
import VolunteerForm from './VolunteerForm';

class Dashboard  extends Component{
    constructor(props){
       super(props)
       this.state={
         loggedIn: this.props.location.state,
         token: localStorage.token,
         volunteer: false,
         food: false
       }
       this.food = this.food.bind(this)
       this.onClick = this.onClick.bind(this)

    }
   componentDidMount(){
       if(!localStorage.token &&this.state.loggedIn){
           localStorage.setItem("token", "success")
       }
       return true
   }
    onClick =()=>{
        this.setState({
            volunteer: false,
            food: false
        })
    }
    volClick=()=>{
        this.setState({
            volunteer: true
        })
        axios({
            method: "POST",
            url: "/volunteers"

        })
    }
    food=()=>{
        this.setState({
            food: true
        })
    }
    volunteer=()=>{
        this.setState({
            volunteer:true
        })
    }
    render(){
        console.log(this.state)
        console.log(localStorage)
        if(this.componentDidMount){
            //it takes awhile for the token to update so it can take two conditions
        if(localStorage.token ==="success"|| this.state.loggedIn){

            if(this.state.food===false && this.state.volunteer===false ){

            return(
                <div>
                    <DashHeader/>
                    <div id="main" className="container">
                     <section id="content">
                <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                <DashCard name={"Volunteers"} onClick={()=>this.volunteer()} > <p>Card For Volunteers</p></DashCard>
                <DashCard name ={"Food"}  onClick={()=>{this.food()}} name="Add Food Donation"> <p>Card for Food</p> </DashCard>
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
        else if(this.state.food ){
            return(
                <div>
                    <DashHeader/>
                    <FoodForm/>
                    <button onClick={this.onClick}>Exit</button>
                
                </div>
            )
        }
        else if(this.state.volunteer){
            return(
                <div>
                    <DashHeader/>
                    <VolunteerForm/>
                    <button onClick={this.onClick}>Exit</button>
                </div>
            )
        }
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