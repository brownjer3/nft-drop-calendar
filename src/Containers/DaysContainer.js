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
        return dates.sort((a,b) => new Date(a) - new Date(b))
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
            <Container className="calendar pt-2">
                <h1 className="header">Upcoming NFT Drops</h1>
                <hr className="border-info"/>
                {this.mapEventDates()}
            </Container>
        )
    }
}

export default DaysContainer