import React, { Component } from 'react'
import axios from "axios"
class FoodRend extends Component{
constructor(props){
  super(props)

  this.state = {
     foodItem: ""
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
    let table = []
      
     if(this.state.foodItem===''){
         console.log('hello')
         
     }
     else{
    // // Outer loop to create parent
    // //Only returns the more recent 3 from the DB
    // return(
    //     <table className="table1">
    //        <thread>
    //            <tr>
    //                <th>
    //                    Doner Name
    //                </th>
    //                <th>
    //                    Food Item
    //                </th>
    //                <th>
    //                   Doner Email
    //                </th>
    //            </tr>
    //        </thread>
    //        <tbody>
    //          {}
    //        </tbody>
    //     </table>
    // )
    for (let i = 0; i < 3; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 1; j++) {
        children.push(<td key={this.state.foodItem[i]._id}>{` ${this.state.foodItem[i].food}`}</td>)
      }
      //Create the parent and add the children
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


export default FoodRend