import React, { Component } from 'react'
import axios from "axios"
import DashHeader1 from '../DashHeader1';
export default class ChangePassword extends Component {
    constructor(props){
        super(props)

        this.state={
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    changePassword(){
       axios({
           method:"POST",
           url: "auth/passwordchange",
           data: {
               email:this.state.email,
               password: this.state.password
           }
       }).then(alert("Password has been changed"), window.location.href="/dash")
    }
  render() {
    return (
      <div>
          <DashHeader1/>
          <h3 className="text-center">Change Password</h3>
          <div className="container foodform">
          <form class="newForm" id="foodform">
              <label for="email">Email</label>
              <input 
                 type="email"
                 name="email"
                 value={this.state.email}
                 onChange={this.handleChange}
                 />
               <label for="password">Password</label>
               <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  />
                  <button className="button" onClick={()=>{this.changePassword()}}>Submit</button>
          </form>
          </div>
      </div>
    )
  }
}
