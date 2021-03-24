import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'
import { createEvent } from '../Actions/eventActions'


class EventForm extends Component {
    state = {
        title: "", 
        creator_name: "", 
        platform_name: "", 
        drop_link: "",
        asset_url: "", 
        drop_datetime: "", 
        type_name: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createEvent(this.state)
        this.setState({
            title: "", 
            creator_name: "", 
            platform_name: "", 
            drop_link: "",
            asset_url: "", 
            drop_datetime: "", 
            type_name: ""
        })
        
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return(
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Drop title" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                    </Form.Group>

                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Creator</Form.Label>
                    <Form.Control placeholder="Creator's name" name="creator_name" value={this.state.creator_name} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Platform</Form.Label>
                    <Form.Control placeholder="Where's it dropping?" name="platform_name" value={this.state.platform_name} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Drop link</Form.Label>
                    <Form.Control type='url' placeholder="Link to the drop" name="drop_link" value={this.state.drop_link} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Asset link</Form.Label>
                    <Form.Control type='url' placeholder="Image/gif link" name="asset_url" value={this.state.asset_url} onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="datetime-local" name="drop_datetime" value={this.state.drop_datetime} onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option value='Art'>Art</option>
                            <option value='Trading Cards'>Trading Cards</option>
                        </Form.Control>
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group> */}
                </Form.Row>

                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
        createEvent: eventData => dispatch(createEvent(eventData))
    })


export default connect(null, mapDispatchToProps)(EventForm)