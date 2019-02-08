import React, { Component } from 'react'
import axios from "axios"
import moment from "moment"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default class FoodAll extends Component {
    constructor(props){
        super(props)
        this.state={
            food:[]
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
                message: 'Are you sure you want to delete this item?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => {axios({
                        method: "POST",
                        url: "/authorize/food/delete/" + id
                    })}
                  },
                  {
                    label: 'No'
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
  render() {
    return (
        <div>
        <h3>Food Donations</h3>
        <table className="table1">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Date</th>
                    <th>Doner Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>

            <tbody>
                {this.state.food.map(food => {
                    return (
                        <tr>
                            <td>{food.food}</td>
                            <td>{moment(`${food.date}`).format("MM / DD / YYYY")}</td>
                            <td>{food.name}</td>
                            <td>{food.email}</td>
                            <td>{food.phone}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(food._id)}} >X</button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
            
      </div>
    )
  }
}

