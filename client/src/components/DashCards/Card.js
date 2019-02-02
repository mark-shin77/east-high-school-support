import React, {Component} from "react"

class DashCard extends Component{
    constructor(props){
        super(props)
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
            </div>
        )
    }
}
export default DashCard