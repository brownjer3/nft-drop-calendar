import React, { Component } from "react";
import Day from "../Components/Day";

class DayContainer extends Component {
    // this is where i'll organize all events into dates
    // also where date filtering should happen (based on current day)

    getUniqueDates = () => {
        const dates = []
        this.props.events.forEach(event => {
            if (!dates.includes(event.drop_date)) {
                dates.push(event.drop_date)
            }
        })
        return dates
    }

    mapEventDates = () => {
        return this.getUniqueDates().map(date => {
            return <Day date={date} />
        })
    }

    render() {
        return(
            <div>
                {this.mapEventDates()}
            </div>
        )
    }
}

export default DayContainer