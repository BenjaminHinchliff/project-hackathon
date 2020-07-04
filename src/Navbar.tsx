import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="secondary" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand className="text-primary">ProjHack</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar-collapsable" />
      <Navbar.Collapse id="navbar-collapsable">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link className="text-primary">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="text-primary">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/news">
            <Nav.Link className="text-primary">News</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logistics">
            <Nav.Link className="text-primary">Logistics</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
