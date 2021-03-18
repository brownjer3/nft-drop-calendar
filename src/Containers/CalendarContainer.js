import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DayContainer from './DayContainer';
import {connect} from 'react-redux'
import { fetchEvents } from '../Actions/eventActions'


class CalendarContainer extends Component {
    //connect to redux here for currentDay from state

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        return(
            <div>
                <Container>
                    <Jumbotron className="calendar py-2">
                        <h1 className="header"></h1>
                        <hr className="border-info"/>
                        <DayContainer events={this.props.events} />
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