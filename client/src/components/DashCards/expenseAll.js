import React, { Component } from 'react'
import axios from "axios"
import moment from 'moment';

export default class ExpenseAll extends Component {
    constructor(props){
        super(props)
        this.state={
            expenses:[]
        }
        this.getExpense = this.getExpense.bind(this)
    }
  componentDidMount(){
      this.getExpense()
  }
  alertDelete=(id)=>{
      alert("Are you sure you want to delete this item?")
      if(alert){
          axios({
              method: "POST",
              url: "/authorize/expenses/delete/" + id
          }).then(alert("Item has been deleted!"))
      }
  }
  //gets all the records from DB and adds them to state
  getExpense=()=>{
     axios({
         method:"GET",
         url: "/authorize/expenses"
     }).then(data=>{this.setState({expenses:data.data})})
  }


  render() {
    
    return (

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
                {this.state.expenses.map(expenses => {
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
            
      </div>
    )
  }
}

