import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class Event extends Component {
    render() {
        return(
            <div>
                <ListGroup horizontal className="d-flex justify-content-between">
                    <ListGroup.Item className="bg-transparent border-0">{this.props.drop.dropTime}</ListGroup.Item>
                    <Image src={this.props.drop.image} style={{ height: '6rem' }}/>
                    <ListGroup.Item className="bg-transparent border-0" >{this.props.drop.title}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0">{this.props.drop.creator}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0">{this.props.drop.platform}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0">{this.props.drop.tags[0]}, {this.props.drop.tags[1]}</ListGroup.Item>
                    <ListGroup.Item className="bg-transparent border-0"><FontAwesomeIcon icon={faCalendarPlus} size='lg'/></ListGroup.Item>
                </ListGroup>    
            </div>
            // <Card className="bg-transparent border-0" >
            //     <Row>
            //         <Col md={4} >
            //             <Image src={this.props.image} style={{ height: '8rem' }}/>
            //         </Col>
            //         <Col md={8}>
            //         <Card.Body>
            //             <p>Event Details</p>
            //             <p>Event Details</p>
            //             <p>Event Details</p>
            //         </Card.Body>
            //         </Col>
            //     </Row>
            // </Card>
        )
    }
}

export default Event