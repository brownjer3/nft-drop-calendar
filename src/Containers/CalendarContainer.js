import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class CalendarContainer extends Component {
    render() {
        return(
            <div>
                <Container className="p-3 border border-success" >
                    <Jumbotron className="calendar">
                        <h1 className="header">Calendar Container</h1>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default CalendarContainer