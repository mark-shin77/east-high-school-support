import React, {Component} from "react"

class Card extends Component{
    render(){
        return(
            <div onClick={this.props.onClick} className="dashcard">
               <h3 className="cardTitle">{this.props.name}</h3>
                <img href={this.props.image}/>
            </div>
        )
    }
}
export default Card