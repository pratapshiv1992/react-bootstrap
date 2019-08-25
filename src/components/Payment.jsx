import React from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap';

const Payment = ({availableCreditLabel, availableCreditOption, selectCreditLabel, selectCreditOption, setActiveKey, selectedDate, selectedService}) => {
    const availableCreditElements = availableCreditOption.map(({text}) =>
        <div>
            <Row>
                <Col sm={10}>
                    <div>{text}</div>
                </Col>
                <Col sm={1}>
                    <Button className={"button service-btn"}
                            variant="outline-secondary"
                            value={33}
                            onClick={(e) => {
                                setActiveKey('bookIt');
                            }}>
                        Use
                    </Button></Col>
            </Row>
            <hr/>
        </div>
    );
    const selectCreditElements = selectCreditOption.map(({text}) =>
        <Row>
            <Col sm={10}>
                <div>{text}</div>
            </Col>
            <Col sm={1}>
                <Button className={"button service-btn"}
                        variant="outline-secondary"
                        value={33}
                        onClick={(e) => {
                            setActiveKey('bookIt');
                        }}>
                    Select
                </Button></Col>
        </Row>
    );
    return <Container>
        <div>How would you like to book your {`IV ${selectedService.dripName}`}</div>
        <div className="payment-container"><label>{availableCreditLabel}</label>
            {availableCreditElements}</div>
        <div className="payment-container"><label>{selectCreditLabel}</label>
            {selectCreditElements}</div>
    </Container>
}

export default Payment;