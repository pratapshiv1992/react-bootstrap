import React from 'react';
import {Row,Col,Button} from 'react-bootstrap';

const SelectService = ({dripData})=>{
    return dripData.map(({dripText,dripName})=>
        <div>
            <Row>
                <Col sm={8}><h2>{dripName}</h2><div>{dripText}</div></Col>
                <Col sm={3}><Button variant="outline-secondary">Select</Button></Col>
            </Row>
            <hr/>
        </div>
    );
}

export default SelectService;