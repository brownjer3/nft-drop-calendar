import React, { Component } from "react";
// import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

const Search = ({handleInputChange}) => {
    return (
        <Form inline onSubmit={e => e.preventDefault()}>
            <Col>
                <FormControl type="text" placeholder="Search for a drop" className="my-3 w-50" size="lg" onChange={(e) => handleInputChange(e)}/>
                {/* <Button variant="outline-info" size="lg">Search</Button> */}
            </Col>
        </Form>  
    )
}

export default Search