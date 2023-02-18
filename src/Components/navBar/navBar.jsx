import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navBar.css'
import { SignOut } from '../../utils/services/FireBase';
const NavBar = () => {
  const userLoggedIn= localStorage.getItem("token");

  return (<div>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/product">Products</Nav.Link>
          <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
          <Nav.Link as={Link} to="/checkout">Cart</Nav.Link>
          {!userLoggedIn ? (
              <Nav.Link as={Link} to="/loginform">LogIn</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/home"
               onClick={() => SignOut()}>LogOut</Nav.Link>
            )}
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Outlet /></div>
  );
}

export default NavBar;
