import React, { Component } from "react";
import Event from '../Components/Event'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class EventsContainer extends Component {

    render() {
        return(
            <div>
                <Card className="bg-transparent border-success" >
                    <ListGroup variant="flush">
                        <ListGroup.Item className="bg-transparent"><Event drop={this.state.one} /></ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><Event drop={this.state.two} /></ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><Event drop={this.state.three}/></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default EventsContainer