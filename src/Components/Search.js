import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class Search extends Component {
    render() {
        return(
            <>
                <Form inline>
                    <Col>
                        <FormControl type="text" placeholder="Search for a drop" className="my-3 w-50" size="lg" />
                        {/* <Button variant="outline-info" size="lg">Search</Button> */}
                    </Col>
                </Form>  
            </>
        )
    }
}

export default Search