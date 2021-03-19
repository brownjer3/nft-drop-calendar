import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DayContainer from './DayContainer';
import {connect} from 'react-redux'
import { fetchEvents } from '../Actions/eventActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faPlus } from '@fortawesome/free-solid-svg-icons'


class CalendarContainer extends Component {
    //connect to redux here for currentDay from state

    componentDidMount() {
        this.props.fetchEvents()
    }

    handleLoading = () => {
        console.log(this.props)
        if (this.props.loading) {
            return <FontAwesomeIcon icon={faIgloo} size='2x'/>
        } else {
            return <DayContainer events={this.props.events} />
        }
    }

    render() {
        return(
            <div>
                <Container>
                    <Jumbotron className="calendar py-2">
                        <h1 className="header"></h1>
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