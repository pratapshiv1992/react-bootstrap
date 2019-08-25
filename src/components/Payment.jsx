import React from 'react';

const Payment = ({selectedDate,selectedService}) => {
    return <div>{selectedDate}--{selectedService.dripName}</div>
}

export default Payment;