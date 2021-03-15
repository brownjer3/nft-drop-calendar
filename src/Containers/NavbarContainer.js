import React, { Component } from "react"
import Logo from '../Assets/drop-cal-logo-1.png';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faPlus } from '@fortawesome/free-solid-svg-icons'


// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'


class NavbarContainer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className=''>
                    <Nav className='col '>
                        <NavLink to="/today"><Nav.Link href="/today">Today's Drops</Nav.Link></NavLink>
                        <NavLink to="/discover"><Nav.Link href="/discover">Discover</Nav.Link></NavLink>
                    </Nav>
                    <NavLink to="/" exact className='col '>
                        <Navbar.Brand>
                            {/* <img src={Logo} width="50" height="50" /> */}
                            <FontAwesomeIcon icon={faIgloo} size='2x'/>
                        </Navbar.Brand>
                    </NavLink>
                    <div className='col d-flex justify-content-end'>
                        <FontAwesomeIcon icon={faPlus} size='2x' className='text-warning'/>
                    </div>
                    
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form> */}
                </Navbar>
            </div>
        )
    }
}

export default NavbarContainer