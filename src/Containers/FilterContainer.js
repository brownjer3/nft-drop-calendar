import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'

class FilterContainer extends Component {
    render() {
        return(
            <Container className="d-flex justify-content-around m-2">
                <Button className="badge rounded-pill" variant="info">Today</Button>
                <Button className="badge rounded-pill" variant="info">Hot Drops</Button>
                <Button className="badge rounded-pill" variant="info">By Marketplace</Button>
                <Button className="badge rounded-pill" variant="info">By Network</Button>
            </Container>
        )
    }
}

export default FilterContainer