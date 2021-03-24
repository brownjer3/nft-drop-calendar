import React, { Component } from "react";
import Day from "../Components/Day";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import moment from 'moment'


class DaysContainer extends Component {

    getUniqueDates = () => {
        const dates = []
        this.props.events.forEach(event => {
            // const dateString = moment(event.drop_datetime).format('dddd, MMMM Do')
            const dateString = new Date(event.drop_datetime).toDateString()
            if (!dates.includes(dateString)) {
                dates.push(dateString)
            }
        })
        return dates.sort().reverse()
    }

    filterEvents = (date) => {
        return this.props.events.filter((event) => new Date(event.drop_datetime).toDateString() === date)
    }

    mapEventDates = () => {
        return this.getUniqueDates().map(date => {
            
            return <Day key={date} date={date} events={this.filterEvents(date)}/>
        })
    }

    render() {
        return(
            <Container className="h-100">
                <Jumbotron className="calendar pt-2">
                    <h1 className="header"></h1>
                    <hr className="border-info"/>
                    {this.mapEventDates()}
                </Jumbotron>
            </Container>
        )
    }
}

export default DaysContainer