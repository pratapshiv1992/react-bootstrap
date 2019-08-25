import React from 'react';
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

const ServiceDateTime = ({days, timeSlots, selectedService = {}}) => {
    return <div>
        <h3>You're booking {selectedService.dripName} (60 Minute duration)</h3>
        <table class="table table-borderless">
            <TableHead days={days}/>
            <TableBody timeSlots={timeSlots}/>
        </table>
    </div>
}

export default ServiceDateTime;
