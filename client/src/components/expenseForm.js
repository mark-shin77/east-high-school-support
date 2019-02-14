import React, {Component} from "react"
import axios from "axios"
class ExpenseForm extends Component{
    //state handles form for submission
    constructor(props){
        super(props)
        this.state={
            item: "",
            ammount: "",
            quantity: "",
            doner: "",
            email: "",
            date: ""
        }
        this.submitClick = this.submitClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
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
            url: "/authorize/expenses",
            data: {
             item: this.state.item,
             ammount: this.state.ammount,
             quantity: this.state.quantity,
             doner: this.state.doner,
             email: this.state.email,
             date: this.state.date
            }
        }).then(alert("The expense item has been updated!"), this.setState({item:"",ammount:"", quantity:"", doner:"", email:"", date:""}))
    }
    render(){
        return(

            <div class="container">
                <h3  className="text-center">Donations</h3>
                <form id="foodform">
                <label htmlFor="name">Item: </label>
						<input
							type="text"
							name="item"
							value={this.state.item}
							onChange={this.handleChange}
						/>
						<label htmlFor="email">Ammount($): </label>
						<input
							type="text"
							name="ammount"
							value={this.state.ammount}
							onChange={this.handleChange}
						/>
                        <label htmlFor="phone">Quantity:</label>
                        <input 
                           type="text"
                           name="quantity"
                           value={this.state.quantity}
                           onChange={this.handleChange}
                        />
                        <label htmlFor="doner">Doner Name:</label>
                        <input
                           type="text"
                           name="doner"
                           value={this.state.doner}
                           onChange={this.handleChange}
                           />
                        <label htmlFor="donerEmail">Doner Email:</label>
                        <input
                           type="email"
                           name="email"
                           onChange={this.handleChange}
                           />
                        <label htmlFor="date">Date: </label>
                        <input
                           type="text"
                           name="date"
                           onChange={this.handleChange}
                           />
                    
                        
                </form>
                <button className="button foodbutton" onClick={()=>{this.submitClick()}}>Submit</button>
            </div>
        )
    }
}
export default ExpenseForm