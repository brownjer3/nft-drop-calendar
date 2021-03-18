import React, { Component } from "react";
import EventsContainer from "../Containers/EventsContainer";
import {connect} from 'react-redux'


class Day extends Component {

    filterEvents = () => {
        return this.props.events.filter((event) => event.drop_date === this.props.date)
    }

    render() {
        return(
            <div>
                <h3 className="d-flex pl-2">{this.props.date}</h3>
                <EventsContainer events={this.filterEvents()} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(Day)