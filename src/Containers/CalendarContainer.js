import React, { Component } from "react";
import SearchContainer from './SearchContainer'
import DaysContainer from './DaysContainer';
import {connect} from 'react-redux'
import { fetchEvents } from '../Actions/eventActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import moment from "moment";


class CalendarContainer extends Component {

    state = {
        startDate: new Date(), 
        displayEvents: []
    }

    componentDidMount() {
        this.props.fetchEvents()
    }

    displayUpcomingEvents = () => {
        return this.props.events.filter((event) => {
            const start = moment(this.state.startDate)
            const date = moment(event.drop_date)
            return date.diff(start, 'days') <= 7 && date.diff(start, 'days') >= 0
        })
    }

    handleLoading = () => {
        if (this.props.loading) {
            return <FontAwesomeIcon icon={faIgloo} size='2x'/>
        } else {
            return <DaysContainer events={this.displayUpcomingEvents()} />
        }
    }

    render() {
        return(
            <>
                <SearchContainer />
                {this.handleLoading()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents: () => dispatch(fetchEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer)