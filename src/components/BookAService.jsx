import React from 'react';
import {Tab, Row, Col, Nav,Container} from 'react-bootstrap';
import SelectService from '../components/SelectService';
import ServiceDateTime from '../components/ServiceDateTime';
import {dripData} from '../resources/dummyData';
import {days, timeSlots} from '../resources/dummyData';

const BookAService = () => {
    const [selectedService,setSelectedService] = React.useState({});
    const [activeKey,setActiveKey] = React.useState("selectService");

    return (
        <Container>
            <div>Book a service</div>
            <Tab.Container id="left-tabs-example" activeKey={activeKey} defaultActiveKey={activeKey}>
                <Row>
                    <Col sm={3}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item><Nav.Link eventKey="selectService" disabled={activeKey === "selectService" ? false : true}>Select Service</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="dateTime" disabled={activeKey === "dateTime" ? false : true} >Date/Time</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="payment" disabled={activeKey === "payment" ? false : true}>Payment</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="bookIt" disabled={activeKey === "bookIt" ? false : true}>Book It</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="selectService"><SelectService dripData={dripData} setActiveKey={setActiveKey} setSelectedService={setSelectedService} /></Tab.Pane>
                            <Tab.Pane eventKey="dateTime"><ServiceDateTime selectedService={selectedService} days={days} timeSlots={timeSlots} /></Tab.Pane>
                            <Tab.Pane eventKey="payment">Payment</Tab.Pane>
                            <Tab.Pane eventKey="bookIt">Book It</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default BookAService;