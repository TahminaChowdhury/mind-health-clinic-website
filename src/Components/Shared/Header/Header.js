import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const {user, logOut} =useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
        <i class="fas fa-brain icon"></i>
        <Navbar.Brand className="text-dark fw-bold">
        MIND HEALTH <br /> CLINIC 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/home">HOME</NavLink>
                <NavLink to="/aboutus">ABOUT US </NavLink>
                <NavLink to="/doctors">DOCTORS</NavLink>
                <NavLink to="/contactus">CONTACT US</NavLink>
            </Nav>
            <Nav>
            <Navbar.Text className="me-3 fs-5 fw-bold text-dark">
                    Signed in as: <span className="text-primary">{user?.displayName}</span> 
            </Navbar.Text>
                {
                    user?.email ?
                    <button onClick={logOut} className="btn btn-regular rounded-pill">log out</button>
                    :
                    <Link to="/login">
                    <button className="btn btn-regular rounded-pill">log in</button>
                    </Link>
                }
                 <span className="ms-2 me-3 fw-bold fs-5 ">or</span>
                <Link to="/signup">
                    <button className="btn btn-regular rounded-pill">Sign-up</button>
                </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;

