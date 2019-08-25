import React from 'react';
import {Row, Col, Button,Container} from 'react-bootstrap';

const SelectService = ({dripData, setSelectedService, setActiveKey}, i) => {
    const elements = dripData.map(({dripText, dripName}) =>
        <div>
            <Row>
                <Col sm={10}><h2 className={"color-00"}>{dripName}</h2>
                    <h5 className={"h5 rm-padding color-61"}>{dripText}</h5>
                    <h5 className={"color-61"}>$$</h5>
                </Col>
                <Col sm={1}>
                    <Button className={"padding5-13 service-btn"}
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
        <label className={"h5 rm-padding color-00"}>Select an IV Drip</label>
        {elements}
    </Container>
}

export default SelectService;