import React, { Component } from "react";
import EventsContainer from "../Containers/EventsContainer";
import EventsTable from '../Containers/EventsTable'


class Day extends Component {

    render() {
        return(
            <div>
                <h3 className="d-flex pl-2">{this.props.date}</h3>
                <EventsContainer />
                <EventsTable />
            </div>
        )
    }
}

export default Day