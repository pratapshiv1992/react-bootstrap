import React from 'react';
import {Tab, Row, Col, Nav, Container} from 'react-bootstrap';
import SelectService from '../components/SelectService';
import ServiceDateTime from '../components/ServiceDateTime';
import Payment from '../components/Payment';
import {dripData, tabLinksData} from '../resources/dummyData';
import {
    days, timeSlots, availableCreditLabel,
    availableCreditOption,
    selectCreditLabel,
    selectCreditOption
} from '../resources/dummyData';


const TabLinks = ({data, activeKey}) => {
    const navItemElements = data.map(({eventKey, label, defaultLink}) => <Nav.Item className={"navItem"}>
        <Nav.Link eventKey={eventKey} disabled={defaultLink || activeKey === eventKey ? false : true}>{label}</Nav.Link>
    </Nav.Item>);
    return <Nav variant="tabs" className="flex-column">
        {navItemElements}
    </Nav>
}

const BookAService = (props) => {
    const [selectedService, setSelectedService] = React.useState({});
    const [activeKey, setActiveKey] = React.useState("selectService");
    const [selectedDate, setSelectedDate] = React.useState(null);

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <div className="div">BOOK A SERVICE</div>
                </Col>
                <Col sm={9}>{Object.keys(selectedService).length > 0 && activeKey === "dateTime" &&
                <h5 className={"h5"}> You're booking &nbsp;&nbsp;<strong>{selectedService.dripName}</strong>&nbsp;&nbsp;(60 Minute duration)
                </h5>}</Col>
            </Row>
            <Tab.Container id="left-tabs-example" activeKey={activeKey} defaultActiveKey={activeKey}
                           onSelect={(value) => {
                               if (value === "selectService") {
                                   setActiveKey(value);
                                   setSelectedService({});
                               }
                           }}>
                <Row>
                    <Col sm={3}><TabLinks data={tabLinksData} activeKey={activeKey}/></Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="selectService"><SelectService dripData={dripData}
                                                                              setActiveKey={setActiveKey}
                                                                              setSelectedService={setSelectedService}/></Tab.Pane>
                            <Tab.Pane eventKey="dateTime"><ServiceDateTime selectedService={selectedService}
                                                                           days={days}
                                                                           timeSlots={timeSlots}
                                                                           setActiveKey={setActiveKey}
                                                                           setSelectedDate={setSelectedDate}
                            /></Tab.Pane>
                            <Tab.Pane eventKey="payment"><Payment selectedDate={selectedDate}
                                                                  selectedService={selectedService}
                                                                  availableCreditLabel={availableCreditLabel}
                                                                  availableCreditOption={availableCreditOption}
                                                                  selectCreditLabel={selectCreditLabel}
                                                                  selectCreditOption={selectCreditOption}
                                                                  setActiveKey={setActiveKey}
                            /></Tab.Pane>
                            <Tab.Pane eventKey="bookIt">Book It</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default BookAService;