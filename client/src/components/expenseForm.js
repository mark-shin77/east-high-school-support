import React, {Component} from "react"
import axios from "axios"
class ExpenseForm extends Component{
    //state handles form for submission
    constructor(props){
        super(props)
        this.state={
            item: "",
            ammount: "",
            quantity: ""
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
            }
        }).then(alert("The expense item has been updated!"))
    }
    render(){
        return(
            <div class="container">
                <form id="foodform">
                <label htmlFor="name">Item: </label>
						<input
							type="text"
							name="item"
							value={this.state.item}
							onChange={this.handleChange}
						/>
						<label htmlFor="email">Ammount: </label>
						<input
							type="text"
							name="ammount"
							value={this.state.ammount}
							onChange={this.handleChange}
						/>
                        <label htmlFor="phone">Quantity:</label>
                        <input 
                           type="number"
                           name="quantity"
                           value={this.state.quantity}
                           onChange={this.handleChange}
                        />
                    
                        
                </form>
                <button  onClick={()=>{this.submitClick()}}>Submit</button>
            </div>
        )
    }
}
export default ExpenseForm