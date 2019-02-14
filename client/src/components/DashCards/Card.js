import React, {Component} from "react"
import Card from 'react-bootstrap/Card'
import {Nav} from 'react-bootstrap'
import FoodRend from './FoodRend';
import ExpenseRend from './expenseRend';
import "./dash.css"
import VolunteerRend from './volunteerRend';
class DashCard extends Component{
    constructor(props){
        super(props)
        this.state={
            rendered: this.props.rendered,
            }
        
        }
    cardPicker=()=>{
        if(this.state.rendered =='food'){
            return <FoodRend />
        }
       if(this.state.rendered =='expense'){
            return <ExpenseRend/>
        }
        if(this.state.rendered =='volunteer'){
            return <VolunteerRend/>
        }
    }
    
    render(){
        return(
            <div className="cardwidth">
           <Card>
  <Card.Header>
    <Nav variant="tabs" className="navtab" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link  className="navtab" href="#first">Overview</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  className="navtab" onClick={this.props.onClick1} href="#link">View All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  className="navtab" onClick={this.props.onClick}>
          Add {this.props.name}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Recent {this.props.name}</Card.Title>
    <Card.Text>
      {this.cardPicker()}    
    </Card.Text>
  </Card.Body>
</Card>


      
            </div>
        )
    }
}
export default DashCard