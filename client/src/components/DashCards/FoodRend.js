import React, { Component } from 'react'
import axios from "axios"
class FoodRend extends Component{
constructor(props){
  super(props)

  this.state = {
      foodItem: []
  }
  this.getFood = this.getFood.bind(this)
  this.createTable = this.createTable.bind(this)
}
componentDidMount(){
    this.getFood()
}
  getFood=()=>{
    axios({
        method:"GET",
        url: "/authorize/food1"
    }).then(data=>{this.setState({foodItem: data.data})})
}

createTable = () => {
    //table to push the most recent 3 donations
      const newTable =[] 
      console.log(this.state.foodItem)
      if(this.state.foodItem.length >2){
      for(let i=this.state.foodItem.length-1; i> this.state.foodItem.length-4; i--){
          newTable.push(this.state.foodItem[i])
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
                        Service
                    </th>
                </tr>
            </thread>
            <tbody>
              {newTable.map(table=>{
                  return (
                    <tr>
                        <td>{table.item}</td>                           
                        <td>{table.ammount}</td>
                        <td>{table.store}</td>
                        <td>{table.service}</td>
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

export default FoodRend;
