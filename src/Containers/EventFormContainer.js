import React, { Component } from "react";
import EventForm from '../Components/EventForm'
import Container from "react-bootstrap/Container"


class EventFormContainer extends Component {
    render() {
        return(
            <Container className='p-3 text-start'>
                <h1 className='my-3'>Drop a Drop</h1>
                <EventForm />
            </Container>
        )
    }
}


export default EventFormContainer