import React, { Component } from 'react'
import axios from "axios"
//Will display the most recent expenses entered into DB
class ExpenseRend extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         expenseItem: ""
      }
      this.getExpense = this.getExpense.bind(this)
      this.createTable= this.createTable.bind(this)

    }
    componentDidMount(){
        //loads the expense state first thing for load time
        this.getExpense()
    }
    getExpense=()=>{
        axios({
            method:"GET",
            url: "/authorize/expenses"
        }).then(data=>{this.setState({expenseItem: data.data})})
    }
    //waits for the state to be populate and makes a table
    createTable =()=>{
        console.log(this.state.expenseItem)
        let table= []
        //if it hasn't been populated don't do anything db calls 
        //can take a while
        if(this.state.expenseItem===""){
            console.log('Hello')
        }
        else if(this.state.expenseItem != ""){
            //Outer loop to create parent
            for(let i =0; i < 2; i++){
                let children = []
                //inner loop for children
                for(let j =0; j< 1; j++){
                    children.push(<td key={this.state.expenseItem[i]._id}>{` ${this.state.expenseItem[i].item} ${this.state.expenseItem[i].date}`}</td>)
                }
                table.push(<tr>{children}</tr>)
            }
            console.log(table)
            return (table)
        }
    }
    render(){
        return(
            <div>
                {this.createTable()}
            </div>
        )
    }
    
}
export default ExpenseRend