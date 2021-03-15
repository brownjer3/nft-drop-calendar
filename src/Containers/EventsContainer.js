import React, { Component } from "react";
import Event from '../Components/Event'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class EventsContainer extends Component {

    state = {
        one: {
            
            image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615509111/AMatthew/YoungNSickMarch15/young-open-icon_pmmadt.png",
            dropTime: "6:30pm ET",
            title: "HARD TO EXPLAIN",
            creator: "Young & Sick", 
            platform: "Nifty Gateway", 
            tags: ["art", "pack"]
        }, 
        two: {
            image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615502630/AMatthew/NateHillMarch15/nate-auction-icon_j7frwi.png",
            dropTime: "7pm ET",
            title: "Getaway",
            creator: "Nate Hill", 
            platform: "Nifty Gateway", 
            tags: ["art", "open edition"]
        }, 
        three: {
            image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615497338/Ashley/PaulJackson/Screen_Shot_2021-03-11_at_4.15.29_PM_sne15a.png",
            dropTime: "7pm ET",
            title: "INSIDES",
            creator: "Paul Jackson", 
            platform: "Nifty Gateway", 
            tags: ["art", "open edition"]
        }
    }

    render() {
        return(
            <div>
                <Card className="bg-transparent border-0" >
                    <ListGroup variant="flush">
                        <ListGroup.Item className="bg-transparent"><Event drop={this.state.one} /></ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><Event drop={this.state.two} /></ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><Event drop={this.state.three}/></ListGroup.Item>
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