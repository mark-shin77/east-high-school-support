import React, { Component } from 'react'
import axios from "axios"
import moment from "moment"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default class VolAll extends Component {
    constructor(props){
        super(props)
        this.state={
            volunteer:[]
           
        }
        this.getFood = this.getVol.bind(this)
    }
   
    componentDidMount(){
        this.getVol()
    }
    //deletes a item with params from the object
    alertDelete=(id)=>{        
            confirmAlert({
                title: 'Confirm to submit',
                message: 'How Many do you Want to Remove?',
                buttons: [
                  {
                    label: 'Remove',
                    // input:input,
                    onClick: () => {axios({
                        method: "POST",
                        url: "/authorize/food/delete/" + id
                    }).then(window.location.href="/dash")}
                  },
                  {
                    label: 'Cancel'
                                      }
                ]
              })
        }
    
    //gets all the records from DB and adds them to state
    getVol=()=>{
        axios({
            method:"GET",
            url: "/api/volunteers"
        }).then(data=>{this.setState({volunteer: data.data.data.members})})
    }
    
  render() {
      if(this.state.volunteer.length > 0){
      return(
        <div>
            <div className="allHead">
            <h3>Volunteers</h3>
            </div>
        <table className="table1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                   
                </tr>
            </thead>

            <tbody>
                {this.state.volunteer.map(volunteer => {
                    return (
                        <tr>
                            <td>{volunteer.firstname}</td>
                            <td>{volunteer.lastname}</td>                           
                            <td>{volunteer.email}</td>
                            <button type="submit" className="button1" onClick={()=>{this.alertDelete(volunteer._id)}} >X</button>
                        </tr>
                       
                    )
                })}
                 
                 
                
            </tbody>
        </table>

        </div>
    )
}
else{return(null)}
  }
}