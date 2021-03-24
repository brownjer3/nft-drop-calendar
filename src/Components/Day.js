import React, { Component } from "react";
import Event from "./Event";
import Table from 'react-bootstrap/Table'
import {DayHeader} from './DayHeader'
import moment from 'moment'

class Day extends Component {

    makeEvents = () => {
        const sorted = this.props.events.sort((a,b) => new Date(a.drop_datetime).getTime() - new Date(b.drop_datetime).getTime())
        return sorted.map((event) => <Event key={event.id} event={event} time={this.displayTime(event)} />)
    }

    displayTime = (e) => {
        return moment(moment(e.drop_datetime).toString()).format('h:mm a')
    }

    render() {
        return(
            <>
                <DayHeader date={this.props.date}/>
                <Table responsive striped hover variant="dark">
                    <tbody>
                        {this.makeEvents()}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Day