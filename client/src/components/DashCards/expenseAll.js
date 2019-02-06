import React, { Component } from 'react'
import axios from "axios"
export default class ExpenseAll extends Component {
    constructor(props){
        super(props)
        this.state={
            expenses:[]
        }
        this.getExpense = this.getExpense.bind(this)
        this.createTable = this.createTable.bind(this)
    }
  componentDidMount(){
      this.getExpense()
  }
  getExpense=()=>{
     axios({
         method:"GET",
         url: "/authorize/expenses"
     }).then(data=>{this.setState({expenses:data.data})})
  }

  createTable=()=>{
    //   let table=[]

    //   if(this.state.expenses.length > 0){
    //     for(let i=0; i<this.state.expenses; i++){
    //         let children=[]

    //         for(let j=0; j<1; j++){
    //             children.push(<td key={this.state.expenses[i]._id}>{`${this.state.expenses.item} ${this.state.expenses.ammount} ${this.state.expenses.date}`}</td>)
    //         }
    //         console.log(children)
    //         table.push(<tr>{children}</tr>)
    //     }
    //     console.log(table)
    //   return table
    //   }
    //   else {
    //       return(
    //      <div>Hello</div>
    //       )
    //   }
      
     
  }
  render() {
    
    return (

      <div>
        <h3>Expenses</h3>
        {   this.state.expenses.map(expenses=>{
            return(
                <div>
                    {expenses.item}{expenses.date}
                </div>
            )
        })
        }
            
      </div>
    )
  }
}

