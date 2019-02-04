import React, {Component} from "react"
import axios from "axios"
class DashCard extends Component{
    constructor(props){
        super(props)
        this.state={
            foodItem:"",
            food: this.props.food,
            expense: this.props.expense,
            expenseItem: "" 
        }
        this.getFood = this.getFood.bind(this);
        this.foodPop = this.foodPop.bind(this)
    }
    getFood=()=>{
        axios({
            method:"GET",
            url: "/food"
        }).then(data=>{this.setState({foodItem: data})})
    }
    foodPop = ()=>{
     if(this.state.food){
        for(const i=0;i<5; i++){
            return(
                <div>
                    <li>
                        {this.state.foodItem.name}
                    </li>
                </div>
            )
        }
    }
    }
    render(){
        return(
            <div  className="dashcard"  onClick={this.props.onClick}>
               <h3 className="cardTitle">{this.props.name}</h3>
                <img href={this.props.image}/>
                <p>
                    Card for {this.props.name}
                </p>
                <button onClick={this.props.onClick}>{this.props.name}</button>
                <button onClick={this.props.onClick1}>View All</button>
            </div>
        )
    }
}
export default DashCard