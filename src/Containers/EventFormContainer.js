import React, { Component } from "react";
import EventForm from '../Components/EventForm'
import Container from "react-bootstrap/Container"


class EventFormContainer extends Component {
    render() {
        console.log("EventFormContainer history props:", this.props.history)
        return(
            <Container className='p-3 text-start'>
                <h1 className='my-3'>Drop a Drop</h1>
                <EventForm history={this.props.history}/>
            </Container>
        )
    }
}


export default EventFormContainer