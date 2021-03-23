import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import AddToCalendar from 'react-add-to-calendar';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/DropdownButton'



const Event = ({event, time}) => {
    // const exportable = {
    //     title: event.title, 
    //     location: event.drop_link, 
    //     startTime: event.drop_datetime
    // }

    let exportable = {
        title: 'Sample Event',
        description: 'This is the sample event provided as an example only',
        location: 'Portland, OR',
        startTime: '2016-09-16T20:15:00-04:00',
        endTime: '2016-09-16T21:45:00-04:00'
    }

    return (
        <tr hover={false}>        
            <td colSpan="1" className="align-middle">
                {time}
                <br/> <br/>
                <Button><AddToCalendar event={exportable} /></Button>
                {/* <FontAwesomeIcon icon={faCalendarPlus} size='lg' /> */}
            </td>
            <td colSpan="2" className="align-middle"><Image rounded src={event.asset_url} style={{ height: '6rem' }}/></td>
            <td colSpan="4" className="align-middle">{event.title}</td>
            <td colSpan="4" className="align-middle">{event.creator_name}</td>
            <td colSpan="4" className="align-middle">{event.platform_name}</td>
            <td colSpan="4" className="align-middle">{event.type_name}</td>
        </tr>
    )
}

export default Event