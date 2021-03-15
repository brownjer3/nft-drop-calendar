import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import EventContainer from "./EventContainer";

class CalendarContainer extends Component {
    render() {
        return(
            <div>
                <Container className="border border-success" >
                    <Jumbotron className="calendar py-2">
                        <h1 className="header">Calendar Container</h1>
                        <EventContainer /> 
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default CalendarContainer