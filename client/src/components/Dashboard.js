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
import ExpenseAll from "./DashCards/expenseAll";
import FoodAll from "./DashCards/foodAll";
import AnalyticsCard from './DashCards/analyticsCard';

class Dashboard  extends Component{
    constructor(props){
        super(props)
        this.state={
            loggedIn: this.props.location.state,
            token: localStorage.token,
            volunteer: false,
            food: false,
            expense: false,
            expenseAll: false,
            foodAll: false
        }
        this.food = this.food.bind(this)
        this.onClick = this.onClick.bind(this)
        this.expense=this.expense.bind(this)
        this.foodAll = this.foodAll.bind(this)
        this.volAll = this.volAll.bind(this)
        this.expAll = this.expAll.bind(this)
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
            expense: false,
            expenseAll: false,
            foodAll: false
        })
        window.location.href="/dash"
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
    
    volAll=()=>{
        this.setState({
            volAll:true
        })
    }
    expAll=()=>{
        this.setState({
            expenseAll: true
        })
    }
    //sets the state to show all food dontations
    foodAll=()=>{
        this.setState({
            foodAll:true
        })
    }
    expense=()=>{
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
              

            if(this.state.food===false && this.state.volunteer===false && this.state.expense===false && this.state.expenseAll===false && this.state.foodAll===false){

            return(
                <div>
                    <DashHeader/>
                    <div id="main" className="container">
                     <section id="content">
                <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                <DashCard className="volcard"name={"Volunteers"} onClick={()=>this.volunteer()} onClick1={()=>{{this.volAll()}}} rendered="volunteer"> <p>Card For Volunteers</p></DashCard>
                <DashCard className="foodcard"name ={"Expenses"} rendered="food"  onClick={()=>{this.food()}} onClick1={()=>{this.foodAll()}} food={true}> <p>Expenses</p> </DashCard>
                
                </div>
                <div className="col-5">
                <DashCard className="expcard" name = {'Donations'} onClick={()=>{this.expense()}} onClick1={()=>{this.expAll()}} rendered="expense"> <p>Donations</p> </DashCard>
                <AnalyticsCard/>
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
                    <button className="button formbutton" onClick={this.onClick}>Exit</button>
                
                </div>
            )
        }
        else if(this.state.expense ===true){
            return(
                <div>
                    <DashHeader/>
                    <ExpenseForm/>
                    <button className="button formbutton" onClick={this.onClick}>Exit</button>
                </div>
            )
        }
        else if(this.state.expenseAll){
            return(
                <div>
                    <DashHeader />
                    <ExpenseAll/>
                    <button className="button formbutton" onClick={this.onClick}>Exit</button>
                </div>
            )
        }
        else if(this.foodAll){
            return(
                <div>
                    <DashHeader/>
                    <FoodAll/>
                    <button className="button formbutton " onClick={this.onClick}>Exit</button>
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