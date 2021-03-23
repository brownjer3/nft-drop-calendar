import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';



const Event = ({event, time}) => {

    return (
        <tr>        
            <td>{time} <br/><FontAwesomeIcon icon={faCalendarPlus} size='lg' /></td>
            <td><Image rounded src={event.asset_url} style={{ height: '6rem' }}/></td>
            <td>{event.title}</td>
            <td>{event.creator_name}</td>
            <td>{event.platform_name}</td>
            <td>{event.type_name}</td>
        </tr>
    )
}

export default Event