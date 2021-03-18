import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import Event from '../Components/Event'


class EventsContainer extends Component {
    // connect to state to grab current date
    // or maybe just have current day be a local state?

    makeEvents = () => {
        return this.props.events.map((event) => <Event key={event.id} event={event} />)
    }

    render() {
        return(
            <Table striped hover variant="dark">
                <tbody>
                    {this.makeEvents()}
                </tbody>
            </Table>
        )
    }
}

export default EventsContainer