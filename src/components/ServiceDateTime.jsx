import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';
import {getFormattedTime} from '../utils';
const TableHead = ({days}) => {
    const thElements = days.map((day) => <th scope="col">{day}</th>);
    return <thead>
    <tr>{thElements}</tr>
    </thead>
}

const TableBody = ({timeSlots = []}) => {
    const rowElements = timeSlots.map((slot) => (<tr>{slot.map(date => (<td scope="row">
        <button>{getFormattedTime({date})}</button>
    </td>))}</tr>));
    return <tbody>
    {rowElements}
    </tbody>
}

const Calendar = (props)=>{
    return  <Row>
        <Col xs={4}><MDBIcon icon="angle-left" /><label>PREVIOUS WEEK</label></Col>
        <Col xs={4}><h5>WEEK OF 24/8/19</h5> </Col>
        <Col xs={4}> <label>NEXT WEEK</label><MDBIcon icon="angle-right" /></Col>
    </Row>

}

const ServiceDateTime = ({days, timeSlots, selectedService={}}) => {
    return <div>
        <h3>You're booking {selectedService.dripName} (60 Minute duration)</h3>
        <Calendar />
        <table class="table table-borderless">
            <TableHead days={days}/>
            <TableBody timeSlots={timeSlots}/>
        </table>
    </div>
}

export default ServiceDateTime;
