import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DayContainer from './DayContainer';
import {connect} from 'react-redux'
import { fetchEvents } from '../Actions/eventActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faPlus } from '@fortawesome/free-solid-svg-icons'
import moment from "moment";


class CalendarContainer extends Component {
    //connect to redux here for currentDay from state

    state = {
        startDate: new Date(), 
        displayEvents: []
    }

    displayUpcomingEvents = () => {
        const events = this.props.events.filter((event) => {
            const start = moment(this.state.startDate)
            const date = moment(event.drop_date)
            return date.diff(start, 'days') <= 7 && date.diff(start, 'days') >= 0
        })
        return events
    }

    componentDidMount() {
        this.props.fetchEvents()
    }

    handleLoading = () => {
        if (this.props.loading) {
            return <FontAwesomeIcon icon={faIgloo} size='2x'/>
        } else {
            return <DayContainer events={this.displayUpcomingEvents()} />
        }
    }

    render() {
        return(
            <div>
                <Container>
                    <Jumbotron className="calendar py-2">
                        <h1 className="header">Dropping this week</h1>
                        <hr className="border-info"/>
                        {this.handleLoading()}
                    </Jumbotron>
                </Container>
            </div>
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