import React, {Component} from "react"
import axios from "axios"
import {Form} from "react-bootstrap"
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
        }).then(alert("The expense item has been updated!"), this.setState({item:"",ammount:"", quantity:""}))
    }
    render(){
        return(

            <div class="container">
                {/* <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                 <Form.Group controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="Password" />
                </Form.Group>
  <               Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form> */}
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
                <button className="button" onClick={()=>{this.submitClick()}}>Submit</button>
            </div>
        )
    }
}
export default ExpenseForm