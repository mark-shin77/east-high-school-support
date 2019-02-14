import React, { Component } from 'react'
import axios from "axios"
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class ExpenseAll extends Component {
    constructor(props){
        super(props)
        this.state={
            expenses:[],
            sort: ""
        }
        this.getExpense = this.getExpense.bind(this)
    }
  componentDidMount(){
      this.getExpense()
  }
  alertDelete=(id)=>{        
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are You Sure You Want to Delete?',
        buttons: [
          {
            label: 'Remove',
            // input:input,
            onClick: () => {axios({
                method: "POST",
                url: "/authorize/expenses/delete/" + id
            }).then(window.location.href="/dash")}
          },
          {
            label: 'Cancel'
                              }
        ]
      })
}
  //gets all the records from DB and adds them to state
  getExpense=()=>{
     axios({
         method:"GET",
         url: "/authorize/expenses"
     }).then(data=>{this.setState({expenses:data.data})})
  }

  sort(){
      this.setState({
          sort: true
      })
  }
  notSort(){
      this.setState({
          sort: ""
      })
  }
  render() {
    const cash= []
    const item = []
    if(this.state.sort ===""){
       
 
    return (

      <div>
        <h3 className="allHead">Expenses</h3>
        <table className="table1">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Date</th>
                    <th>Value($)</th>
                    <th>Quantity</th>
                    <th>Doner Name</th>
                    <th>Doner Email</th>
                </tr>
            </thead>

            <tbody>
                {this.state.expenses.map(expenses => {
                    return (
                        <tr>
                            <td>{expenses.item}</td>
                            <td>{moment(`${expenses.date}`).format("MM / DD / YYYY")}</td>
                            <td>{`$${expenses.ammount}`}</td>
                            <td>{expenses.quantity}</td>
                            <td>{expenses.doner}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(expenses._id)}} >X</button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
             <button class="button foodbutton" onClick={()=>{this.sort()}}> Sort </button>
      </div>
    )
}
    else if(this.state.sort){
        for(let i=0; i< this.state.expenses.length; i++){
            if(this.state.expenses[i].item =="cash"|| this.state.expenses[i].item=="Cash" || this.state.expenses[i].item=="money"){
                cash.push(this.state.expenses[i])
            }
            else {item.push(this.state.expenses[i])}
        }
        return(
            <div>
                <h3>Expenses</h3>

                <table className="table1">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Date</th>
                    <th>Value($)</th>
                    <th>Quantity</th>
                </tr>
            </thead>

            <tbody>
                {cash.map(expenses => {
                    return (
                        <tr>
                            <td>{expenses.item}</td>
                            <td>{moment(`${expenses.date}`).format("MM / DD / YYYY")}</td>
                            <td>{`$${expenses.ammount}`}</td>
                            <td>{expenses.quantity}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(expenses._id)}} >X</button>
                        </tr>
                    )
                })}
                {item.map(expenses => {
                    return (
                        <tr>
                            <td>{expenses.item}</td>
                            <td>{moment(`${expenses.date}`).format("MM / DD / YYYY")}</td>
                            <td>{`$${expenses.ammount}`}</td>
                            <td>{expenses.quantity}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(expenses._id)}} >X</button>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button className="button foodbutton" onClick={()=>{this.notSort()}}>Unsort</button>

            </div>
        )
    }
  }
}

