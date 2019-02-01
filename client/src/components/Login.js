import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
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
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: true
		})
	}

	render() {
		if(this.props.loggedIn){
			return <Redirect to={{pathname:"/dash",
			                       state: {
									   loggedIn: this.props.loggedIn 
								   }} } /> //<location="/admin/dashboars" <Dashboard loggedIn={this.props.loggedIn}/>
		}
		// if (this.state.redirectTo) {
		// 	return <Redirect to={{ pathname: "/dash/admin"}} loggedIn={this.props.loggedIn} />
		 else {
			return (
				<div className="LoginForm">
					<h1>Login form</h1>
					<form>
						<label htmlFor="username">Email: </label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.handleSubmit}>Login</button>
					</form>
					
                
				</div>
			)
		}
	}
}

export default LoginForm