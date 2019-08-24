import moment from 'moment';

export const getFormattedTime = ({date=new Date(),format='h:mma'})=> {
    return moment(date).format(format);
}

