import React from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap';
import {getFormattedTime} from '../utils';

const ServiceBooked = ({bookedData}) => {
    const rowElements = (bookedData || []).map(({dripName, duration, date, amount}) =>
        <Row>
            <Col xs={4}><h4>{dripName}</h4>
                <div>Service Summary</div>
                <div>{duration}</div>
            </Col>
            <Col xs={4}>
                <div>{getFormattedTime({date, format: "dddd MMM Qo"})}</div>
                <div>{getFormattedTime({date})}</div>
            </Col>
            <Col xs={4}>{amount}</Col>
        </Row>);

    return <Container>
        <div>You're Booked!</div>
        {rowElements}
        <hr/>
        <button className={""} onClick={(e) => {
            console.log('BOOK ANOTHER TREATMENT CLICKED');
        }}>BOOK ANOTHER TREATMENT
        </button>
        <button className={""} onClick={(e) => {
            console.log('REFER A FRIEND CLICKED');
        }}>REFER A FRIEND
        </button>
    </Container>
}

export default ServiceBooked;