import React from 'react';
import {Tab, Row, Col, Nav, Container} from 'react-bootstrap';
import SelectService from '../components/SelectService';
import ServiceDateTime from '../components/ServiceDateTime';
import {dripData, tabLinksData} from '../resources/dummyData';
import {days, timeSlots} from '../resources/dummyData';

const TabLinks = ({data, activeKey}) => {
    const navItemElements = data.map(({eventKey, label, defaultLink}) => <Nav.Item className={"navItem"}>
        <Nav.Link eventKey={eventKey} disabled={defaultLink || activeKey === eventKey ? false : true}>{label}</Nav.Link>
    </Nav.Item>);
    return <Nav variant="tabs" className="flex-column">
        {navItemElements}
    </Nav>
}

const BookAService = () => {
    const [selectedService, setSelectedService] = React.useState({});
    const [activeKey, setActiveKey] = React.useState("selectService");

    return (
        <Container>
            <div className={"div"}>BOOK A SERVICE</div>
            <Tab.Container id="left-tabs-example" activeKey={activeKey} defaultActiveKey={activeKey}
                           onSelect={(value) => value === "selectService" && setActiveKey(value)}>
                <Row>
                    <Col sm={3}><TabLinks data={tabLinksData} activeKey={activeKey}/></Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="selectService"><SelectService dripData={dripData}
                                                                              setActiveKey={setActiveKey}
                                                                              setSelectedService={setSelectedService}/></Tab.Pane>
                            <Tab.Pane eventKey="dateTime"><ServiceDateTime selectedService={selectedService} days={days}
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