import React, { Component } from "react"
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'


class NavbarContainer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <NavLink to="/" exact >
                        <Navbar.Brand>
                            NFT Drop Cal
                        </Navbar.Brand>
                    </NavLink>
                    <Nav className="mr-auto">
                        <NavLink to="/today"><Nav.Link href="/today">Today's Drops</Nav.Link></NavLink>
                        <NavLink to="/discover"><Nav.Link href="/discover">Discover</Nav.Link></NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

export default NavbarContainer