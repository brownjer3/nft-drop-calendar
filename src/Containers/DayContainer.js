import React, { Component } from "react";
import Day from "../Components/Day";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class DayContainer extends Component {

    getUniqueDates = () => {
        const dates = []
        this.props.events.forEach(event => {
            if (!dates.includes(event.drop_date)) {
                dates.push(event.drop_date)
            }
        })
        return dates.sort()
    }

    filterEvents = (date) => {
        return this.props.events.filter((event) => event.drop_date === date)
    }

    mapEventDates = () => {
        return this.getUniqueDates().map(date => {
            return <Day key={date} date={date} events={this.filterEvents(date)}/>
        })
    }

    render() {
        return(
            <Container className="h-100">
                <Jumbotron className="calendar py-2">
                    <h1 className="header">Dropping this week</h1>
                    <hr className="border-info"/>
                    
                    {this.mapEventDates()}
                </Jumbotron>
            </Container>
        )
    }
}

export default DayContainer