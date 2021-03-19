import React, { Component } from "react";
import Event from "./Event";
import Table from 'react-bootstrap/Table'
import {DayHeader} from './DayHeader'


class Day extends Component {

    makeEvents = () => {
        return this.props.events.map((event) => <Event key={event.id} event={event} />)
    }

    render() {
        return(
            <>
                <DayHeader date={this.props.date}/>
                <Table striped hover variant="dark">
                    <tbody>
                        {this.makeEvents()}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Day