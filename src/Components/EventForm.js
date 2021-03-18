import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"

class EventForm extends Component {
    render() {
        return(
            <Container className='p-3 text-start'>
                <h1 className='my-3'>Drop a Drop</h1>
                <Form >
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Drop title" />
                        </Form.Group>

                    </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Creator</Form.Label>
                        <Form.Control placeholder="Creator name" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Platform</Form.Label>
                        <Form.Control placeholder="Where's it dropping?" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Asset link</Form.Label>
                        <Form.Control type='url' placeholder="Url " />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="datetime-local" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default EventForm