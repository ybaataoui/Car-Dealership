import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Carousel from './Carousel';


function NavBar() {
    return (
        <div>
            <div>
                <Navbar bg='dark' variant='dark' expand="lg">
                    <Container >
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="navbar-nav ">
                                <Nav.Link>+1 407-955-7780</Nav.Link>
                                <Nav.Link>info@gmail.com</Nav.Link>
                                <Nav.Link>Mon - Saturday: 07:00 AM - 07:00 PM </Nav.Link>
                            </Nav>
                            <Nav className="navbar-nav ms-auto">
                                <div class="btn-toolbar">
                                    <button type="button" class="btn btn-secondary m-2">Login</button>
                                    <button type="button" class="btn btn-secondary m-2">Register</button>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Navbar bg='dark' variant='dark' expand="lg">
                    <Container >
                        <Navbar.Brand href="#home">
                            <img src="https://www.clipartmax.com/png/small/271-2717436_contact-us-used-car-dealership-logo.png"
                                alt="Contact Us - Used Car Dealership Logo @clipartmax.com" width={200} height={100}></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="navbar-nav ms-auto">
                                <Nav.Link href="#home">HOME</Nav.Link>
                                <Nav.Link href="#link">CARS</Nav.Link>
                                <Nav.Link href="#link">OUR SERVICES</Nav.Link>
                                <Nav.Link href="#link">ABOUT</Nav.Link>
                                <Nav.Link href="#link">CONTACT US</Nav.Link>
                                <Nav.Link href="#link">Search</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>

    );
}


export default NavBar;