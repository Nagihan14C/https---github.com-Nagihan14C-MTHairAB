import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css'; // Importera din CSS-fil

export function NavMenu() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle-knapp för mobilvy */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Hem</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tjanster">
            <Nav.Link>Behandlingar</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>Om oss</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/kontakt1">
            <Nav.Link>Kontakt</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
