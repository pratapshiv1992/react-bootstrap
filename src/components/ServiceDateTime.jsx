import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';
import {getFormattedTime} from '../utils';

const TableHead = ({days}) => {
    const thElements = days.map((day) => <th scope="col" className={"fontArial"}>{day}</th>);
    return <thead>
    <tr>{thElements}</tr>
    </thead>
}

const TableBody = ({timeSlots = [], setActiveKey, setSelectedDate}) => {
    const rowElements = timeSlots.map((slot) => (<tr>{slot.map(date => (<td scope="row">
        <button className={"button"} onClick={(e)=>{
            setActiveKey('payment');
            setSelectedDate(date);
        }} >{getFormattedTime({date})}</button>
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

const ServiceDateTime = ({days, timeSlots, setActiveKey, setSelectedDate}) => {
    return <div>
        <Calendar />
        <table className="table table-borderless table-responsive ">
            <TableHead days={days}/>
            <TableBody timeSlots={timeSlots} setActiveKey={setActiveKey} setSelectedDate={setSelectedDate} />
        </table>
    </div>
}

export default ServiceDateTime;
