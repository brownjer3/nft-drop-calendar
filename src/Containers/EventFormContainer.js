import React, { Component } from "react";
import EventForm from '../Components/EventForm'
import Container from "react-bootstrap/Container"
import {connect} from 'react-redux'

class EventFormContainer extends Component {
    render() {
        return(
            <Container className='p-3 text-start'>
                <h1 className='my-3'>Drop a Drop</h1>
                <EventForm addEvent={(eventData) => this.props.createEvent(eventData)}/>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: eventData => dispatch({type: 'ADD_EVENT', event: eventData})
    }
}


export default connect(null, mapDispatchToProps)(EventFormContainer)