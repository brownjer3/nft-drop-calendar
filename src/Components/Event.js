import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table'



const Event = ({event, time}) => {

    return (
        <tr hover={false}>        
            <td colSpan="1" className="align-middle">

                {time}
                <br/> <br/>
                <FontAwesomeIcon icon={faCalendarPlus} size='lg' />

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