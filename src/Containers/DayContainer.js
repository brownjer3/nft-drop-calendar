import React, { Component } from "react";
import Day from "../Components/Day";

class DayContainer extends Component {
    state = {
        date1: "Monday, March 15th", 
        date2: "Tuesday, March 16th", 
        date3: "Wednesday, March 17th"
    }

    render() {
        return(
            <div>
                <Day date={this.state.date1}/> 
                <Day date={this.state.date2}/> 
                <Day date={this.state.date3}/> 
            </div>
        )
    }
}

export default DayContainer