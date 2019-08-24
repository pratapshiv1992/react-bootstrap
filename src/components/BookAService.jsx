import React from 'react';
import {Tab, Row, Col, Nav, Container} from 'react-bootstrap';
import SelectService from '../components/SelectService';
import ServiceDateTime from '../components/ServiceDateTime';
import {dripData} from '../resources/dummyData';
import {days, timeSlots} from '../resources/dummyData';

const BookAService = () => {
    return (
        <Container>
            <div className={"div"}>BOOK A SERVICE</div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="selectService">
                <Row>
                    <Col sm={3}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item className={"navItem"}><Nav.Link eventKey="selectService">Select service</Nav.Link></Nav.Item>
                            <Nav.Item className={"navItem"}><Nav.Link eventKey="dateTime" disabled={true}>Date/Time</Nav.Link></Nav.Item>
                            <Nav.Item className={"navItem"}><Nav.Link eventKey="payment" disabled={true}>Payment</Nav.Link></Nav.Item>
                            <Nav.Item className={"navItem"}><Nav.Link eventKey="bookIt" disabled={true}>Book it</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="selectService"><SelectService dripData={dripData}/></Tab.Pane>
                            <Tab.Pane eventKey="dateTime"><ServiceDateTime days={days}
                                                                           timeSlots={timeSlots}/></Tab.Pane>
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