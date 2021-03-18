import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class Event extends Component {
    render() {
        console.log(this.props.event)
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