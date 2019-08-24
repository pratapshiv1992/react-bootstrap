import React from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import SelectService from '../components/SelectService';

const Text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem " +
    "Ipsum has of the printing and typesetting industry. Lorem Ipsum has $$"

const dripData = [
    {dripName: "Drip #1", dripText: Text},
    {dripName: "Drip #2", dripText: Text},
    {dripName: "Drip #3", dripText: Text}
]


const BookAService = () => {
    return (
        <div>
            <div>Book a service</div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="selectService">
                <Row>
                    <Col sm={3}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item><Nav.Link eventKey="selectService">Select Service</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="dateTime" disabled={true}>Date/Time</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="payment" disabled={true}>Payment</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="bookIt" disabled={true}>Book It</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="selectService"><SelectService dripData={dripData}/></Tab.Pane>
                            <Tab.Pane eventKey="dateTime">Date Time</Tab.Pane>
                            <Tab.Pane eventKey="payment">Payment</Tab.Pane>
                            <Tab.Pane eventKey="bookIt">Book It</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default BookAService;