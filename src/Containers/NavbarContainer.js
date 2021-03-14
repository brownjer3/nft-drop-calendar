import React, { Component } from "react"
import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar'


class NavbarContainer extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact >Home</NavLink>
                <NavLink to="/today" exact >Today's Drops</NavLink>
                {/* <NavLink to="/discover" exact >Discover</NavLink> */}
                {/* <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar> */}
            </div>
        )
    }
}

export default NavbarContainer