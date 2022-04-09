import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../Firebase/Firebase.init';
// import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const auth = getAuth(app)
const Header = () => {

    const [user] = useAuthState(auth)
    // const { user, handleSignOut } = useFirebase();
    // console.log(user);
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


                            {
                                user?.uid ?
                                    <Link onClick={() => signOut(auth)} to="/Login"> Logout </Link> :
                                    <Link to="/Login"> Login</Link>

                            }
                            <span className='ms-2'>{user?.displayName && user.displayName}</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;