import React, { Component } from "react";
import EventsContainer from "../Containers/EventsContainer";


class Day extends Component {

    render() {
        return(
            <div>
                <h5 className="d-flex pl-2 text-decoration-underline">{this.props.date}</h5>
                <EventsContainer />
            </div>
        )
    }
}

export default Day