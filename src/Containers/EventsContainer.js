import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table'


class EventsContainer extends Component {
    // connect to state to grab current date
    // or maybe just have current day be a local state?
    state = {
        one: {
            
            image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615509111/AMatthew/YoungNSickMarch15/young-open-icon_pmmadt.png",
            dropTime: "6:30pm ET",
            title: "HARD TO EXPLAIN",
            creator: "Young & Sick", 
            platform: "Nifty Gateway", 
            tags: ["art", "pack"]
        }, 
        two: {
            image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615502630/AMatthew/NateHillMarch15/nate-auction-icon_j7frwi.png",
            dropTime: "7pm ET",
            title: "Getaway",
            creator: "Nate Hill", 
            platform: "Nifty Gateway", 
            tags: ["art", "open edition"]
        }, 
        three: {
            image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615497338/Ashley/PaulJackson/Screen_Shot_2021-03-11_at_4.15.29_PM_sne15a.png",
            dropTime: "7pm ET",
            title: "INSIDES",
            creator: "Paul Jackson", 
            platform: "Nifty Gateway", 
            tags: ["art", "open edition"]
        }
    }

    render() {
        return(
            <Table striped hover variant="dark">
                <tbody>
                    <tr >
                        <td>{this.state.one.dropTime} <br/><FontAwesomeIcon icon={faCalendarPlus} size='lg' /></td>
                        <td><Image rounded src={this.state.one.image} style={{ height: '6rem' }}/></td>
                        <td>{this.state.one.title}</td>
                        <td>{this.state.one.creator}</td>
                        <td>{this.state.one.platform}</td>
                        <td>{this.state.one.tags[0]}, {this.state.one.tags[1]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.two.dropTime}<br/> <FontAwesomeIcon icon={faCalendarPlus} size='lg' /></td>
                        <td><Image rounded src={this.state.two.image} style={{ height: '6rem' }}/></td>
                        <td>{this.state.two.title}</td>
                        <td>{this.state.two.creator}</td>
                        <td>{this.state.two.platform}</td>
                        <td>{this.state.two.tags[0]}, {this.state.one.tags[1]}</td>
                    </tr>
                    <tr>
                        <td >{this.state.three.dropTime}<br/> <FontAwesomeIcon icon={faCalendarPlus} size='lg' /></td>
                        <td><Image rounded src={this.state.three.image} style={{ height: '6rem' }}/></td>
                        <td>{this.state.three.title}</td>
                        <td>{this.state.three.creator}</td>
                        <td>{this.state.three.platform}</td>
                        <td>{this.state.three.tags[0]}, {this.state.one.tags[1]}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default EventsContainer