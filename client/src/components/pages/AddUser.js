import React, { Component } from 'react'
import SignupForm from '../signUp';
import DashHeader1 from './../DashHeader1';

export default class AddUser extends Component {
  render() {
      if(localStorage.token==="success" ){
    return (

      <div>
          <DashHeader1/>
         <SignupForm/>
      </div>
    )
}
else{
    return(
    <div>
        <h3 class="text center"> You Aren't Authorized to be on this Page</h3>
    </div>
    )
}
  }
}
