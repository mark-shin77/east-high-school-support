import React, { Component } from 'react'
import axios from "axios"
import moment from "moment"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default class FoodAll extends Component {
    constructor(props){
        super(props)
        this.state={
            food:[],
            ammount: "",
            sort: ""
        }
        this.getFood = this.getFood.bind(this)
    }
   
    componentDidMount(){
        this.getFood()
    }
    //deletes a item with params from the object
    alertDelete=(id)=>{        
            confirmAlert({
                title: 'Confirm to submit',
                message: 'How Many do you Want to Remove?',
                buttons: [
                  {
                    label: 'Remove',
                    // input:input,
                    onClick: () => {axios({
                        method: "POST",
                        url: "/authorize/food/delete/" + id
                    }).then(window.location.href="/dash")}
                  },
                  {
                    label: 'Cancel'
                                      }
                ]
              })
        }
    
    //gets all the records from DB and adds them to state
    getFood=()=>{
       axios({
           method:"GET",
           url: "/authorize/food1"
       }).then(data=>{this.setState({food:data.data})})
    }
    service=()=>{
        this.setState({
            sort: true
        })
    }
    unsort=()=>{
        this.setState({
            sort: ""
        })
    }
  render() {
    const stashArray =[];
    const hygineArray=[];
    const support = [];
    const boutique =[];
    const other = [];
      if(this.state.sort==""){
    return (
        <div>
        <h3>Food Donations</h3>
        <table className="table1">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Ammount</th>
                    <th>Store</th>
                    <th>Services</th>                    
                    <th>Date</th>
                </tr>
            </thead>

            <tbody>
                {this.state.food.map(food => {
                    return (
                        <tr>
                            <td>{food.item}</td>                           
                            <td>{food.ammount}</td>
                            <td>{food.store}</td>
                            <td>{food.service}</td>
                            <td>{moment(`${food.date}`).format("MM / DD / YYYY")}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(food._id)}} >X</button>
                        </tr>
                       
                    )
                })}
            </tbody>
        </table>
        <button className="button foodbutton" onClick={()=>{this.service()}}>Sort By Service</button>
      </div>
    )
  }
  else if(this.state.sort){
      
      for(let i=0; i< this.state.food.length; i++){
          if(this.state.food[i].service=="Stash" || this.state.food[i].service=="stach" || this.state.food[i].service=="Sash"){
              stashArray.push(this.state.food[i])
             
          }
          else if(this.state.food[i].service=="Hygine" || this.state.food[i].service=="Hygiene"){
            hygineArray.push(this.state.food[i])
          }
          else if(this.state.food[i].service=="Family Support"){
            support.push(this.state.food[i])
          }
          else if(this.state.food[i].service=="Boutique"){
            boutique.push(this.state.food[i])
          }
          //if they dont match up with the categories
          else{other.push(this.state.food[i])}
          
      }
     
  }
  
      return(
        <div>
            <div className="allHead">
            <h3>Food Donations</h3>
            </div>
        <table className="table1">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Ammount</th>
                    <th>Store</th>
                    <th>Services</th>                    
                    <th>Date</th>
                </tr>
            </thead>

            <tbody>
                {stashArray.map(food => {
                    return (
                        <tr>
                            <td>{food.item}</td>                           
                            <td>{food.ammount}</td>
                            <td>{food.store}</td>
                            <td>{food.service}</td>
                            <td>{moment(`${food.date}`).format("MM / DD / YYYY")}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(food._id)}} >X</button>
                        </tr>
                       
                    )
                })}
                 {hygineArray.map(food => {
                    return (
                        <tr>
                            <td>{food.item}</td>                           
                            <td>{food.ammount}</td>
                            <td>{food.store}</td>
                            <td>{food.service}</td>
                            <td>{moment(`${food.date}`).format("MM / DD / YYYY")}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(food._id)}} >X</button>
                        </tr>
                       
                    )
                })}
                 {support.map(food => {
                    return (
                        <tr>
                            <td>{food.item}</td>                           
                            <td>{food.ammount}</td>
                            <td>{food.store}</td>
                            <td>{food.service}</td>
                            <td>{moment(`${food.date}`).format("MM / DD / YYYY")}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(food._id)}} >X</button>
                        </tr>
                       
                    )
                })}
                 {boutique.map(food => {
                    return (
                        <tr>
                            <td>{food.item}</td>                           
                            <td>{food.ammount}</td>
                            <td>{food.store}</td>
                            <td>{food.service}</td>
                            <td>{moment(`${food.date}`).format("MM / DD / YYYY")}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(food._id)}} >X</button>
                        </tr>
                       
                    )
                })}
                {other.map(food => {
                    return (
                        <tr>
                            <td>{food.item}</td>                           
                            <td>{food.ammount}</td>
                            <td>{food.store}</td>
                            <td>{food.service}</td>
                            <td>{moment(`${food.date}`).format("MM / DD / YYYY")}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(food._id)}} >X</button>
                        </tr>
                       
                    )
                })}
                
            </tbody>
        </table>
        <button class="button foodbutton" onClick={()=>{this.unsort()}}>Unsort</button>

        </div>
    )
  }
}


