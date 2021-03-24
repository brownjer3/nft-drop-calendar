import React, { Component } from "react"
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Search = ({handleSubmit, handleInputChange}) => {
    return (
        <Form inline onSubmit={(e) => handleSubmit(e)}>
            <Col >
                <FormControl type="text" placeholder="Search for a drop" className="my-3 w-50" size="lg" onChange={(e) => handleInputChange(e)}/>
                <FormControl type="date" size="lg" id='date-filter' className='ml-2' onChange={(e) => handleInputChange(e)}/>
            </Col>
        </Form>  
    )
}

export default Search