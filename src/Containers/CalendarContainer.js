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
        displayEvents: [], 
        query: ""
    }

    componentDidMount() {
        this.props.fetchEvents()
    }

    eventsToDisplay = () => {
        if (this.state.query) {
            return this.filterEvents()
        } else {
            return this.displayUpcomingEvents()
        }
    }

    displayUpcomingEvents = () => {
        return this.props.events.filter((event) => {
            const start = moment(this.state.startDate)
            const date = moment(event.drop_datetime)
            return date.diff(start, 'days') <= 7 && date.diff(start, 'days') >= 0
        })
    }

    filterEvents = () => {
        if (this.state.query === 'free') {
            return this.props.events.filter(event => event.free)
        } else {
            return this.props.events.filter((event) => {
                const attrs = event.title + event.creator_name + event.platform_name + event.type_name
                return attrs.toLowerCase().includes(this.state.query)
            })
        }
    }

    handleLoading = () => {
        if (this.props.loading) {
            return <FontAwesomeIcon icon={faIgloo} size='2x'/>
        } else {
            return <DaysContainer events={this.eventsToDisplay()} />
        }
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleFilters = (e) => {
        switch(e.target.id) {
            case 'free-button':
                return 'hello'
                // this.setState((prevState) => {
                //     const freeEvents = prevState.displayEvents.filter(event => event.free)
                //     return {displayEvents: freeEvents}
                // })
            case 'markplace-filter':
                const freeEvents = this.props.events.filter(event => event.free)
                // this.setState(prevState)
             case 'type-filter': 
                return 'helo'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        this.setState({
            query: ""
        })
    }

    render() {
        return(
            <>
                <SearchContainer
                    // handleFilters={this.handleFilters}
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                />
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