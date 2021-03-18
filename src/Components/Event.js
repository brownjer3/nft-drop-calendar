import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import moment from 'moment'


class Event extends Component {
    render() {
        return(
            <tr >
                <td>{moment(this.props.event.drop_time).format('h:mm a')} <br/><FontAwesomeIcon icon={faCalendarPlus} size='lg' /></td>
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