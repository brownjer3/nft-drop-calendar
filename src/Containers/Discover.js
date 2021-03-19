import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import RandomContainer from './RandomContainer'
import {connect} from 'react-redux'

class Discover extends Component {

    randomEvent = () => {
        return this.props.events[Math.floor(Math.random() * this.props.events.length)]
    }
    
    render() {
        return(
            <div>
                <div className="App-header">Random Drop</div> 
                <Jumbotron className="calendar py-2 d-flex justify-content-center">
                    <RandomContainer event={this.randomEvent()}/>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(Discover)