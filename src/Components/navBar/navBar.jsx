import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navBar.css';
import { SignOut } from '../../utils/services/FireBase';

const NavBar = () => {
  const userLoggedIn = localStorage.getItem('token');

  return (
    <div>
      <Navbar className="navBar">
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav >
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              CATEGORIES
            </Nav.Link>
            <Nav.Link as={Link} to="/checkout">
              CART
            </Nav.Link>
            <Nav.Link as={Link} to="/home"  className="center-link" >
              THREAD &amp; STONES
            </Nav.Link>
            <Nav.Link as={Link} to="/signUpForm">
              SIGN UP
            </Nav.Link>
            {!userLoggedIn ? (
              <Nav.Link as={Link} to="/loginform">
                LOGIN
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/home" onClick={() => SignOut()}>
                LOGOUT
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavBar;
