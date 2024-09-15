import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ACCESS_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const dashboard = () => {
    navigate("/dashboard");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div>
      <div>
        <Navbar bg="black" variant="dark" expand="lg" className="w-100">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav">
                <Nav.Link>+1 407-955-7780</Nav.Link>
                <Nav.Link>info@gmail.com</Nav.Link>
                <Nav.Link>Mon - Saturday: 07:00 AM - 07:00 PM </Nav.Link>
              </Nav>

              {token ? (
                <>
                  <Nav className="navbar-nav ms-auto">
                    <div className="btn-toolbar">
                      <button
                        type="button"
                        className="btn btn-secondary m-2"
                        onClick={dashboard}
                      >
                        Dashboard
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger m-2"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </Nav>
                </>
              ) : (
                <>
                  <Nav className="navbar-nav ms-auto">
                    <div className="btn-toolbar">
                      <button
                        type="button"
                        className="btn btn-secondary m-2"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary m-2"
                        onClick={register}
                      >
                        Register
                      </button>
                    </div>
                  </Nav>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default TopBar;
