import React from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap';
import {getFormattedTime} from '../utils';

const ServiceBooked = ({bookedData}) => {
    const rowElements = (bookedData || []).map(({dripName, duration, date, amount}) =>
        <Row>
            <Col xs={4}><h4>{dripName}</h4>
                <div className={"h5 rm-padding"}>Service Summary</div>
                <div className={"h5 rm-padding"}>{duration}</div>
            </Col>
            <Col xs={{span: 4, offset: 1}}>
                <div className={"h5 rm-padding"}>{getFormattedTime({date, format: "dddd MMM Do"})}</div>
                <div className={"h5 rm-padding"}>{getFormattedTime({date})}</div>
            </Col>
            <Col xs={{span: 2, offset: 1}} className={"h5 rm-padding"}>{amount}</Col>
        </Row>);

    return <Container>
        <h5 className={"h5 rm-padding"}>You're Booked!</h5>
        {rowElements}
        <hr className={"border"}/>
        <button className={"service-btn booktreat-btn"} onClick={(e) => {
            console.log('BOOK ANOTHER TREATMENT CLICKED');
        }}>BOOK ANOTHER TREATMENT
        </button>
        <button className={"service-btn reffrn-btn"} onClick={(e) => {
            console.log('REFER A FRIEND CLICKED');
        }}>REFER A FRIEND
        </button>
    </Container>
}

export default ServiceBooked;