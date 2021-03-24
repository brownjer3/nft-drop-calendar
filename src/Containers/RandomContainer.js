import { Component } from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import moment from 'moment'

class RandomContainer extends Component {
    render() {
        return (
                <Row className="w-100 d-flex">
                    <Col md={6} className="text-right">
                        <Image fluid rounded src={this.props.event.asset_url} style={{ height: '18rem' }}/>
                    </Col>
                    <Col md={6} className="text-left">
                        <Card className="bg-transparent border-0">
                            <Card.Body>
                                <Card.Title>{this.props.event.title}</Card.Title>
                                <Card.Text>{this.props.event.creator_name}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className="bg-transparent">Dropping <br/>{moment(this.props.event.drop_datetime).format('dddd, MMMM Do')}</ListGroupItem>
                                <ListGroupItem className="bg-transparent">{this.props.event.platform_name}</ListGroupItem>
                                <ListGroupItem className="bg-transparent">{this.props.event.type}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={this.props.event.drop_link} target='_blank'>View Drop</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
        )
    }
}

export default RandomContainer