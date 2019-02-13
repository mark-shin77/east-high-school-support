import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			name: '',
		
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
        // TODO - validate!
        //console.log(this.state.username)
       let email= this.state.email
	   let password = this.state.password
		axios
			.post(`/auth/signup`, {
				email: email,
                password: password
                
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/dash'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<label htmlFor="username">Email: </label>
				<input
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				
				<button className="button" onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}



// const SignupForm = ({
//   onSubmit,
//   onChange,
//   errors,
//   user,
// }) => (
//   <div className="container">
//     <form action="/" onSubmit={onSubmit}>
//       <h2 className="card-heading">Sign Up</h2>

      

//       <div className="field-line">
//         <textarea
//           floatingLabelText="Name"
//           name="name"
//           onChange={onChange}
//           value={user.name}
//         />
//       </div>

//       <div className="field-line">
//         <textarea
//           floatingLabelText="Email"
//           name="email"
//           onChange={onChange}
//           value={user.email}
//         />
//       </div>

//       <div className="field-line">
//         <textarea
//           floatingLabelText="Password"
//           type="password"
//           name="password"
//           onChange={onChange}
//           errorText={errors.password}
//           value={user.password}
//         />
//       </div>

//       <div className="button-line">
//         <button type="submit" label="Create New Account" primary />
//       </div>

      
//     </form>
//   </div>
// );

// SignupForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequired
// };


export default SignupForm;