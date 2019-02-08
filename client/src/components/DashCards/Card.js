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
        if(this.state.rendered ==='food'){
            return <FoodRend />
        }
        else if(this.state.rendered ==='expense'){
            return <ExpenseRend/>
        }
        else if(this.state.rendered ==='volunteer'){
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
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      {this.cardPicker()}    
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>


       {/* <Card>
<Card.Header>
  <Nav variant="pills" defaultActiveKey="#first">
    <Nav.Item>
      <Nav.Link className="button" href="#first">Overview</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#link">View All</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={this.props.onClick}>
        Add {this.props.name}
      </Nav.Link>
    </Nav.Item>
  </Nav>
</Card.Header>
<Card.Body>
  <Card.Title>Special title treatment</Card.Title>
  <Card.Text>
      {this.cardPicker()}
  </Card.Text>
  <button className="button">Go somewhere</button>
</Card.Body>
</Card> */}
         {/* <Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>; */}


            {/* <div  className="dashcard"  onClick={this.props.onClick}>
               <h3 className="cardTitle">{this.props.name}</h3>
                <img href={this.props.image}/>
                <p>
                    Card for {this.props.name}
                </p>
                {this.cardPicker()}
                <button onClick={this.props.onClick}>{this.props.name}</button>
                <button onClick={this.props.onClick1}>View All</button>
            </div> */}
            </div>
        )
    }
}
export default DashCard