import React, { Component } from "react";
import Event from '../Components/Event'

class EventContainer extends Component {
    render() {
        return(
            <div>
                <Event image="https://d9hhrg4mnvzow.cloudfront.net/on.wax.io/nimoy/78201d67-nimoy-cards-base-front-1_10a60e8000000000000028.png"/>
                <Event image="https://d9hhrg4mnvzow.cloudfront.net/on.wax.io/nimoy/cf6f9f78-nimoy-cards-blur-17.gif" />
                <Event image="https://d9hhrg4mnvzow.cloudfront.net/on.wax.io/nimoy/e6847f57-nimoy-cards-golden-front-2.gif" />
            </div>
        )
    }
}

export default EventContainer