import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class Event extends Component {
    render() {
        return(
            <Card className="bg-dark text-white my-3 p-2" >
                <Row>
                    <Col md={4} >
                        <Image src={this.props.image} style={{ height: '12rem' }}/>
                    </Col>
                    <Col md={8}>
                    <Card.Body>
                        <p>Event Details</p>
                        <p>Event Details</p>
                        <p>Event Details</p>
                    </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Event