import { Component } from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
// import Row from 'react-bootstrap/Row'

class RandomContainer extends Component {
    state = {
        image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615502630/AMatthew/NateHillMarch15/nate-auction-icon_j7frwi.png"
    }
    render() {
        return (
            
            <Card className="bg-transparent border-0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.image} />
                {/* <video width='auto' height='300' loop autoplay playsinline src='{this.state.image}'></video> */}

                <Card.Body>
                    <Card.Title>Drop Title</Card.Title>
                    <Card.Text>Creator's info</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="bg-transparent">Date + Time</ListGroupItem>
                    <ListGroupItem className="bg-transparent">Platform</ListGroupItem>
                    <ListGroupItem className="bg-transparent">Type</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            
        )
    }
}

export default RandomContainer