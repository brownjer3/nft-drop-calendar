import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import AddToCalendar from '@culturehq/add-to-calendar';
import '@culturehq/add-to-calendar/dist/styles.css'
import moment from 'moment'



class Event extends Component {

    render() {
        const exportable = {
            name: this.props.event.title,
            details: 'NFT drop on ' + this.props.event.platform_name,
            location: this.props.event.drop_link,
            startsAt: this.props.event.drop_datetime,
            endsAt: moment(this.props.event.drop_datetime).add(30, 'm').toDate()
        }

        return (
            <tr hover={false}>        
                <td colSpan="1" className="align-middle">
                    {this.props.time}
                    <br/> <br/>
                    <AddToCalendar event={exportable}/>
                    {/* <FontAwesomeIcon icon={faCalendarPlus} size='lg' /> */}
                </td>
                <td colSpan="3" className="align-middle"><Image fluid rounded src={this.props.event.asset_url} style={{ height: '6rem' }}/></td>
                <td colSpan="2" className="align-middle">
                    <a className='text-decoration-none text-white' target='_blank' href={this.props.event.drop_link}>
                        {this.props.event.title}
                        {' '}
                        <FontAwesomeIcon icon={faExternalLinkAlt} size='xs' />
                    </a>
                </td>
                <td colSpan="2" className="align-middle">{this.props.event.creator_name}</td>
                <td colSpan="2" className="align-middle">{this.props.event.platform_name}</td>
                <td colSpan="1" className="align-middle">{this.props.event.type_name}</td>
            </tr>
        )
    }
}

export default Event