import React, { Component } from "react";
import CalendarContainer from './CalendarContainer'
import SearchContainer from './SearchContainer'

class Home extends Component {
    render() {
        return(
            <>
                <SearchContainer />
                <CalendarContainer />
            </>
        )
    }
}

export default Home