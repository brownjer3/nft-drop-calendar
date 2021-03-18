import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';


class Event extends Component {
    render() {
        return(
            <tr >
                <td>{this.props.event.drop_time} <br/><FontAwesomeIcon icon={faCalendarPlus} size='lg' /></td>
                <td><Image rounded src={this.props.event.asset_url} style={{ height: '6rem' }}/></td>
                <td>{this.props.event.title}</td>
                <td>{this.props.event.creator_name}</td>
                <td>{this.props.event.platform_name}</td>
                <td>{this.props.event.type_name}</td>
            </tr>
        )
    }
}

export default Event