import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';
import {getFormattedTime, getWeekOf} from '../utils';

const TableHead = ({days}) => {
    const thElements = days.map((day, i) => <th key={i + ""} scope="col" className={"fontArial"}>{day}</th>);
    return <thead>
    <tr>{thElements}</tr>
    </thead>
}

const TableBody = ({timeSlots = [], setActiveKey, setSelectedDate}) => {
    const rowElements = timeSlots.map((slot, i) => (<tr key={i + ""}>{slot.map((date, i) => (<td key={i + ""}>
        <button className={"button"} onClick={(e) => {
            setActiveKey('payment');
            setSelectedDate(date);
        }}>{getFormattedTime({date})}</button>
    </td>))}</tr>));
    return <tbody>
    {rowElements}
    </tbody>

}

const Calendar = (props) => {
    return <Row>
        <Col xs={4}><MDBIcon className={"icon"} icon="caret-left"/><label className={"label"}>PREVIOUS
            WEEK</label></Col>
        <Col xs={4}><h5 className={"color-48"}>WEEK OF {getWeekOf()}</h5></Col>
        <Col xs={{span: 3, offset: 1}} className={"inherit"}> <label className={"label"}>NEXT WEEK</label><MDBIcon
            className={"icon"} icon="caret-right"/></Col>
    </Row>

}

const ServiceDateTime = ({days, timeSlots, setActiveKey, setSelectedDate}) => {
    return <div className={"margin-left-27"}>
        <Calendar/>
        <table className="table table-borderless table-responsive ">
            <TableHead days={days}/>
            <TableBody timeSlots={timeSlots} setActiveKey={setActiveKey} setSelectedDate={setSelectedDate}/>
        </table>
    </div>
}

export default ServiceDateTime;
