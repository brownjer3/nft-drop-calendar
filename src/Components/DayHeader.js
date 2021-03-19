import moment from 'moment';

export const DayHeader = ({date}) => {
    return <h3 className="d-flex pl-2">{moment(date).format('dddd, MMMM Do')}</h3>
}