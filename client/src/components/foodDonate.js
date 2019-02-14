import React, {Component} from "react"
import axios from 'axios';

class FoodForm extends Component{
    //state handles form for submission
    constructor(props){
        super(props)
        this.state={
            item: "",
            store: "",
            service: "",
            ammount: "",
            date: ""
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
             item: this.state.item,
             ammount: this.state.ammount,
             store: this.state.store,
             service: this.state.service,
             date: this.state.date
            }
        }).then(alert("Donation has Been Updated!"), this.setState({item:"", store:"", service:"", ammount: "", date:""}))
    }
    render(){
        return(
            <div class="container">
                <h3 className="text-center">Expenses</h3>
                <form id="foodform">
                <label htmlFor="name">Item: </label>
						<input
							type="text"
							name="item"
							value={this.state.item}
							onChange={this.handleChange}
						/>
						<label htmlFor="ammount">Ammount: </label>
						<input
							type="text"
							name="ammount"
							value={this.state.ammount}
							onChange={this.handleChange}
						/>
                        <label htmlFor="store">Store:</label>
                        <input 
                           type="text"
                           name="store"
                           value={this.state.store}
                           onChange={this.handleChange}
                        />
                        <label htmlFor="food">Service Type:</label>
                        <input 
                          type="text"
                          name="service"
                          value={this.state.service}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="data">Date:</label>
                        <input
                          type="text"
                          name="date"
                          value={this.state.date}
                          onChange={this.handleChange}
                          />
                       
                        
                </form>
                <button className="button foodbutton"  onClick={()=>{this.submitClick()}}>Submit</button>
            </div>
        )
    }
}
export default FoodForm