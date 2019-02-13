import React, { Component } from 'react'
import axios from "axios"
class VolunteerRend extends Component{
constructor(props){
  super(props)

  this.state = {
     volunteer: ""
  }
  this.getFood = this.getFood.bind(this)
  this.createTable = this.createTable.bind(this)
}
componentDidMount(){
    this.getFood()
    console.log(this.state.volunteer)
}
  getFood=()=>{
    axios({
        method:"GET",
        url: "/api/volunteers"
    }).then(data=>{this.setState({volunteer: data.data.data.members})})
}

createTable = () => {
    console.log(this.state.volunteer)
    let table = []
      
    if(this.state.volunteer===''){
        console.log('hello')
    }
    else{
    // Outer loop to create parent
    //Only returns the more recent 3 from the DB
    for (let i = 0; i < 1; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 1; j++) {
        children.push(<td key={i}>{` ${this.state.volunteer[i].firstname} ${this.state.volunteer[i].lastname} ${this.state.volunteer[i].email}` }</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    
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


export default VolunteerRend