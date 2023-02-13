import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navBar.css'

const NavBar = () => {
  return (<div>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/product">Products</Nav.Link>
          <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
          <Nav.Link as={Link} to="/checkout">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Outlet /></div>
  );
}

export default NavBar;
