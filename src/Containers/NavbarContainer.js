import React, { Component } from "react"
import Logo from '../Assets/calendrop-logo4.png';
// import { ReactComponent as Logo } from '../Assets/calendrop-logo3.svg';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap'
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
                            <Image src={Logo} className='w-25 h-25' />
                            {/* <Logo /> */}
                            {/* <FontAwesomeIcon icon={faIgloo} size='2x'/> */}
                        </Navbar.Brand>
                    </NavLink>
                    <NavLink to="/new" exact className='col d-flex justify-content-end'>
                        <FontAwesomeIcon icon={faPlus} size='2x' className='text-warning'/>
                    </NavLink >
                    
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