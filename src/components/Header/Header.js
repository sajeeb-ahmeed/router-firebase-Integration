import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className=''>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Router Firebase</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav className='navlinks'>
                            <Link to="/"> Home </Link>
                            <Link to="/products"> Products </Link>
                            <Link to="/orders"> Orders </Link>
                            <Link to="/reviews"> Reviews </Link>
                            <Link to="/register"> Register</Link>
                            <Link to="/Login"> Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;