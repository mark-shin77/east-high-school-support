import React, {Component} from "react"
import '../assets/css/font-awesome.min.css';
import '../assets/css/main.css';
import Footer from './Footer';
import DashCard from './DashCards/Card';
import axios from "axios"
import DashHeader from './DashHeader';
import FoodForm from "./foodDonate";
import ExpenseForm from "./expenseForm";
import "./dash.css" 

class Dashboard  extends Component{
    constructor(props){
       super(props)
       this.state={
         loggedIn: this.props.location.state,
         token: localStorage.token,
         volunteer: false,
         food: false,
         expense: false
       }
       this.food = this.food.bind(this)
       this.onClick = this.onClick.bind(this)
       this.expense=this.expense.bind(this)

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
            food: false,
            expense: false
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
    expense=()=>{
       console.log('fuck')
        this.setState({
            expense:true
        })
    }
    food=()=>{
        console.log('food')
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
        
            //it takes awhile for the token to update so it can take two conditions
        if(localStorage.token ==="success"|| this.state.loggedIn){

            if(this.state.food===false && this.state.volunteer===false && this.state.expense===false ){

            return(
                <div>
                    <DashHeader/>
                    <div id="main" className="container">
                     <section id="content">
                <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                <DashCard className="volcard"name={"Volunteers"} onClick={()=>this.volunteer()} > <p>Card For Volunteers</p></DashCard>
                <DashCard className="foodcard"name ={"Food"} rendered="food"  onClick={()=>{this.food()}} name="Food Donation" food={true}> <p>Card for Food</p> </DashCard>
                
 
                </div>
                <div className="col-5">
                <DashCard className="expcard" name = {'Expenses'} onClick={()=>{this.expense()}} rendered="expense"> <p>Card for Expenses</p> </DashCard>
                <DashCard className="trafcard" name = {"Traffic"} onClick={this.onClick} > <p>Card for Traffic</p> </DashCard>
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
        else if(this.state.expense ===true){
            return(
                <div>
                    <DashHeader/>
                    <ExpenseForm/>
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

export default Dashboard