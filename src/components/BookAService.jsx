import React from 'react';
import {Tab,Row,Col,Nav,Button} from 'react-bootstrap';

const msg = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
const SelectServive = ({msg,drip})=>{
    return <Row>
            <Col sm={9}>
                <h2>{drip}</h2><div>{msg}</div>
            </Col>
            <Col sm={3}><Button variant="outline-secondary">Select</Button></Col>
        </Row>
}
const BookAService = ()=> {
    return (
        <div>
            <div>Book a service</div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="selectService">
                <Row>
                    <Col sm={3}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item><Nav.Link eventKey="selectService">Select Service</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="dateTime" disabled={true}>Date/Time</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="payment" disabled={true} >Payment</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="bookIt" disabled={true} >Book It</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="selectService"><SelectServive msg={msg} drip={"Drip #1"} /></Tab.Pane>
                            <Tab.Pane eventKey="dateTime"><SelectServive msg={msg} drip={"Drip #2"} /></Tab.Pane>
                            <Tab.Pane eventKey="payment"><SelectServive msg={msg} drip={"Drip #3"} /></Tab.Pane>
                            <Tab.Pane eventKey="bookIt"><SelectServive msg={msg} drip={"Drip #4"} /></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default BookAService;