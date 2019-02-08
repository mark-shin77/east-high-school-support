import React, { Component } from 'react'
import SignupForm from '../signUp';

export default class AddUser extends Component {
  render() {
      if(localStorage.token="success" ){
    return (
      <div>
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
