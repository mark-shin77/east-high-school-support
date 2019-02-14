import React, { Component } from 'react'
import axios from "axios"
class VolunteerRend extends Component{
constructor(props){
  super(props)

  this.state = {
     volunteer: ""
  }
  this.getVol = this.getVol.bind(this)
  this.createTable = this.createTable.bind(this)
}
componentDidMount(){
    this.getVol()
    console.log(this.state.volunteer)
}
  getVol=()=>{
    axios({
        method:"GET",
        url: "/api/volunteers"
    }).then(data=>{this.setState({volunteer: data.data.data.members})})
}

createTable = () => {
    //table to push the most recent 3 donations
     const newTable =[] 
     console.log(this.state.volunteer)
     if(this.state.volunteer.length >2){
     for(let i=this.state.volunteer.length-1; i> this.state.volunteer.length-4; i--){
         newTable.push(this.state.volunteer[i])
     }
     console.log(newTable)
    // // Outer loop to create parent
    // //Only returns the more recent 3 from the DB
     return(
         <table className="table1">
            <thead>
                <tr>
                    
                    <th>
                        Last Name
                </th>
                    <th>
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
              {newTable.map(table=>{
                  return (
                    <tr>
                        <td>{table.lastname}</td>
                        <td>{table.email}</td>
                       
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


export default VolunteerRend