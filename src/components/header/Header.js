import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-light">
            <Link  to="/" className="text-white text-decoration-none">
              Rajmahal Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink exact to="/menu" className="nav-link">
                Menu
              </NavLink>
              <NavLink exact to="/order" className="nav-link">
                Order
              </NavLink>
              <NavLink exact to="/login" className="nav-link">
                Log In
              </NavLink>
              <NavLink exact to="/register" className="nav-link">
                Register
              </NavLink>
              <NavLink exact to="/logout" className="nav-link">
                Log Out
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
