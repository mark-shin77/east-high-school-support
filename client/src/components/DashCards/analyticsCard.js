import React from "react"
import Card from 'react-bootstrap/Card'
import {Nav} from 'react-bootstrap'

const AnalyticsCard = ()=>{
        return(
        <Card>
        <Card.Header>
          <Nav variant="tabs" className="navtab" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link  className="navtab" href="#first">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  className="navtab"  href="https://analytics.google.com/analytics/web/#/report-home/a134365368w194358811p189848989">View Analytics</Nav.Link>
            </Nav.Item>
          
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Traffic</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
        )
}
export default AnalyticsCard