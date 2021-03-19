import { Component } from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class RandomContainer extends Component {
    // state = {
    //     image: "https://res.cloudinary.com/nifty-gateway/image/upload/q_auto:good,w_500/v1615502630/AMatthew/NateHillMarch15/nate-auction-icon_j7frwi.png"
    // }

    render() {
        return (
                <Row>
                    <Col md={6}>
                        <Image rounded src={this.props.event.asset_url} style={{ height: '18rem' }}/>
                    </Col>
                    <Col>
                        <Card className="bg-transparent border-0" >
                            <Card.Body>
                                <Card.Title>{this.props.event.title}</Card.Title>
                                <Card.Text>{this.props.event.creator_name}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className="bg-transparent">{this.props.event.drop_date}</ListGroupItem>
                                <ListGroupItem className="bg-transparent">{this.props.event.platform_name}</ListGroupItem>
                                <ListGroupItem className="bg-transparent">Type (TBD)</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Link to Drop</Card.Link>
                                {/* <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
        )
    }
}

export default RandomContainer