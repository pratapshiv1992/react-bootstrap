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

export const getWeekOf = ()=>{
    const startOfWeek = moment().startOf('isoWeek');
    return getFormattedTime({date:startOfWeek.toDate(),format:"M/D/YYYY"})
}

export const getCuurentWeekDateSlotArray = ()=>{
    const startOfWeek = moment().startOf('isoWeek');
    const endOfWeek = moment().endOf('isoWeek');
    const weekDateSlotArray = [];
    let day = startOfWeek, slotsArray = [], slot = "",dayCount= 0;
    while (dayCount <7) {
        let i = 0;
        slot = day.clone().add(dayCount+7, 'hours');
        while (i < 7) {
            slotsArray.push(slot.toDate());
            slot = slot.clone().add(1, 'd');
            ++i;
        }
        weekDateSlotArray.push(slotsArray);
        slot = "";
        slotsArray = [];
        ++dayCount;
    }
    return weekDateSlotArray;
}