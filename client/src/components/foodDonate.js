import React, {Component} from "react"
import axios from 'axios';

class FoodForm extends Component{
    //state handles form for submission
    constructor(props){
        super(props)
        this.state={
            name: "",
            email: "",
            phone: "",
            food: "",
            quantity: ""
        }
        this.submitClick = this.submitClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.submitClick = this.submitClick.bind(this)
    }
    componentDidMount(){

    }
    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    submitClick =()=>{
        axios({
            method:"POST",
            url: "/authorize/food",
            data: {
             name: this.state.name,
             email: this.state.email,
             phone: this.state.phone,
             food: this.state.food,
             quantity: this.state.quantity,
            }
        }).then(alert("Donation has Been Updated!"), this.setState({name:"", email:"", phone:"", food:"", quantity:""}))
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
                        <label htmlFor="phone">Phone:</label>
                        <input 
                           type="text"
                           name="phone"
                           value={this.state.phone}
                           onChange={this.handleChange}
                        />
                        <label htmlFor="food">Food Item:</label>
                        <input 
                          type="text"
                          name="food"
                          value={this.state.food}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="quantity">Quantity: </label>
                        <input
                          type="number"
                          name="quantity"
                          value={this.state.quantity}
                          onChange={this.handleChange}
                        />
                        
                </form>
                <button className="button"  onClick={()=>{this.submitClick()}}>Submit</button>
            </div>
        )
    }
}
export default FoodForm