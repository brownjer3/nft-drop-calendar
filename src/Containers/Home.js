import React, { Component } from "react";
import CalendarContainer from './CalendarContainer'

class Home extends Component {
    render() {
        return(
            <div>
                <header className="App-header">HOME</header>
                <CalendarContainer />
            </div>
        )
    }
}

export default Home