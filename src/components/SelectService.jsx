import React from 'react';
import {Row, Col, Button,Container} from 'react-bootstrap';

const SelectService = ({dripData, setSelectedService, setActiveKey}, i) => {
    const elements = dripData.map(({dripText, dripName}) =>
        <div>
            <Row>
                <Col sm={10}><h2>{dripName}</h2>
                    <div>{dripText}</div>
                </Col>
                <Col sm={1}>
                    <Button className={"button service-btn"}
                        variant="outline-secondary"
                        value={33}
                        onClick={(e) => {
                            setSelectedService({dripText, dripName});
                            setActiveKey('dateTime');
                        }}>
                        Select
                    </Button></Col>
            </Row>
            <hr/>
        </div>
    );
    return <Container>
        <label>Select an IV Drip</label>
        {elements}
    </Container>
}

export default SelectService;