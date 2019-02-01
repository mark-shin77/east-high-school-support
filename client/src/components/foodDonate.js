import React, {Component} from "react"

class FoodForm extends Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            email: ""
        }
    }

    render(){
        return(
            <div class="container">
                <form id="foodform">
                <label htmlFor="name">Name: </label>
						<input
							type="text"
							name="name"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<label htmlFor="email">Email: </label>
						<input
							type="email"
							name="email"
							value={this.state.password}
							onChange={this.handleChange}
						/>
                </form>
            </div>
        )
    }
}
export default FoodForm