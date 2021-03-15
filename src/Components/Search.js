import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

class Search extends Component {
    render() {
        return(
            <div>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="m-2" size="lg"/>
                    <Button variant="outline-info" size="lg">Search</Button>
                </Form>
            </div>
        )
    }
}

export default Search