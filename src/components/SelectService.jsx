import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

const SelectService = ({dripData}) => {
    const elements = dripData.map(({dripText, dripName}) =>
        <div>
            <Row>
                <Col sm={8}><h2>{dripName}</h2>
                    <div>{dripText}</div>
                </Col>
                <Col sm={3}><Button variant="outline-secondary">Select</Button></Col>
            </Row>
            <hr/>
        </div>
    );
    return <div>
        <label>Select an IV Drip</label>
        {elements}
    </div>
}

export default SelectService;