import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function NavBar() {
  return (
    <div>
      <div>
        <Navbar variant="dark" expand="lg" className="w-100">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Contact Us - Used Car Dealership Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav ms-auto">
                <Nav.Link to="/">
                  <Link to="/">HOME</Link>
                </Nav.Link>
                <Nav.Link to="/">
                  <Link to="/">CARS</Link>
                </Nav.Link>
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
