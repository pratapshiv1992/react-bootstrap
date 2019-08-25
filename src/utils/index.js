import moment from 'moment';
import {serviceBookedData} from '../resources/dummyData';

export const getFormattedTime = ({date = new Date(), format = 'h:mma'}) => {
    return moment(date).format(format);
}

export const prepareBookedData = ({selectedService: {dripName}, selectedDate: date}) => {
    serviceBookedData[0].date = date;
    serviceBookedData.unshift({dripName, duration: "60 Minutes", date, amount: "$300"});
    return serviceBookedData;
}