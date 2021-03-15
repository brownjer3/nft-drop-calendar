import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DayContainer from './DayContainer';


class CalendarContainer extends Component {
    render() {
        return(
            <div>
                <Container className="" >
                    <Jumbotron className="calendar py-2">
                        <h1 className="header"></h1>
                        <hr className="border-info"/>
                        <DayContainer />
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default CalendarContainer