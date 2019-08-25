import React from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap';

const Payment = ({availableCreditLabel, availableCreditOption, selectCreditLabel, selectCreditOption, setActiveKey, selectedDate, selectedService}) => {
    const availableCreditElements = availableCreditOption.map(({text}, i) =>
        <div key={i + ""}>
            <Row className={"padding-btm20"}>
                <Col sm={8}>
                    <div className={"h5 rm-padding"}>{text}</div>
                </Col>
                <Col sm={{span: 2, offset: 1}}>
                    <Button className={"service-btn"}
                            variant="outline-secondary"
                            value={33}
                            onClick={(e) => {
                                setActiveKey('bookIt');
                            }}>
                        USE
                    </Button></Col>
            </Row>
        </div>
    );
    const selectCreditElements = selectCreditOption.map(({text}, i) =>
        <Row key={i + ""} className={"padding-btm20"}>
            <Col sm={8}>
                <div className={"h5 rm-padding"}>{text}</div>
            </Col>
            <Col sm={{span: 1, offset: 1}}>
                <Button className={"service-btn"}
                        variant="outline-secondary"
                        value={33}
                        onClick={(e) => {
                            setActiveKey('bookIt');
                        }}>
                    SELECT
                </Button></Col>
        </Row>
    );
    return <div className={"margin-left-27"}>
        <h6 className={"h5 rm-padding"}>How would you like to book your {`IV ${selectedService.dripName}`}</h6>
        <Container className={"border"}><label className={"pmt-heading"}>{availableCreditLabel}</label>
            {availableCreditElements}</Container>
        <Container className={"border"}><label className={"pmt-heading"}>{selectCreditLabel}</label>
            {selectCreditElements}</Container>
    </div>
}

export default Payment;