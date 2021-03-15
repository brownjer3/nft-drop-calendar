import React, { Component } from "react";
import Event from '../Components/Event'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class EventsContainer extends Component {

    state = {
        image1: "https://d9hhrg4mnvzow.cloudfront.net/on.wax.io/nimoy/78201d67-nimoy-cards-base-front-1_10a60e8000000000000028.png",
        image2: "https://d9hhrg4mnvzow.cloudfront.net/on.wax.io/nimoy/cf6f9f78-nimoy-cards-blur-17.gif",
        image3: "https://d9hhrg4mnvzow.cloudfront.net/on.wax.io/nimoy/e6847f57-nimoy-cards-golden-front-2.gif"
    }

    render() {
        return(
            <div>
                <Card className="bg-transparent border-0" >
                    <ListGroup variant="flush">
                        <ListGroup.Item className="bg-transparent">Event 1</ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><Event image={this.state.image2} /></ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><Event image={this.state.image3} /></ListGroup.Item>
                    </ListGroup>
                </Card>
                {/* <Event image={this.state.image1}/>
                <Event image={this.state.image1} />
                <Event image={this.state.image1} /> */}
            </div>
        )
    }
}

export default EventsContainer