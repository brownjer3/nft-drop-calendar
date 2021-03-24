import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import AddToCalendar from '@culturehq/add-to-calendar';
import '@culturehq/add-to-calendar/dist/styles.css'
import moment from 'moment'



const Event = ({event, time}) => {
    // const exportable = {
    //     title: event.title, 
    //     location: event.drop_link, 
    //     startTime: event.drop_datetime
    // }

    let exportable = {
        name: event.title,
        details: 'NFT drop on ' + event.platform_name,
        location: event.drop_link,
        startsAt: event.drop_datetime,
        endsAt: moment(event.drop_datetime).add(15, 'm').toDate()
    }

    return (
        <tr hover={false}>        
            <td colSpan="1" className="align-middle">
                {time}
                <br/> <br/>
                <AddToCalendar event={exportable}/>
                {/* <FontAwesomeIcon icon={faCalendarPlus} size='lg' /> */}
            </td>
            <td colSpan="3" className="align-middle"><Image fluid rounded src={event.asset_url} style={{ height: '6rem' }}/></td>
            <td colSpan="2" className="align-middle">{event.title}</td>
            <td colSpan="2" className="align-middle">{event.creator_name}</td>
            <td colSpan="2" className="align-middle">{event.platform_name}</td>
            <td colSpan="1" className="align-middle">{event.type_name}</td>
        </tr>
    )
}

export default Event