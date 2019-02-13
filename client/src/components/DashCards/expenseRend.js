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
        const newTable =[] 
     console.log(this.state.foodItem)
     if(this.state.expenseItem.length >2){
     for(let i=this.state.expenseItem.length-1; i> this.state.expenseItem.length-4; i--){
         newTable.push(this.state.expenseItem[i])
     }
     console.log(newTable)
    // // Outer loop to create parent
    // //Only returns the more recent 3 from the DB
     return(
         <table className="table1">
            <thread>
                <tr>
                    <th>
                        Item
                    </th>
                    <th>
                        Ammount($)
                </th>
                    <th>
                       Doner
                    </th>
                </tr>
            </thread>
            <tbody>
              {newTable.map(table=>{
                  return (
                    <tr>
                        <td>{table.item}</td>                           
                        <td>{table.ammount}</td>
                        <td>{table.doner}</td>
                       
                    </tr>
                   
                )
              })}
 
            </tbody>
         </table>
     )

      
   

        
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