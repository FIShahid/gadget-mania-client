import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" >
                <Container>
                    <Navbar.Brand  as={Link}  to="/">gadget mania</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Nav.Link as={Link} to='/services'>Services</Nav.Link> */}
                            {/* <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#reviews">Reviews</Nav.Link> */}
                             <Nav.Link  as={Link} to='/inventory'>Inventory</Nav.Link>
                            <Nav.Link  as={Link} to='/manageInventory'>Manage Inventory</Nav.Link>
                            <Nav.Link  as={Link} to='/blogs'>Blogs</Nav.Link>
                           

                        </Nav>
                        <Nav>
                            {
                                user && <>
                                <Nav.Link  as={Link} to='/manageItem'>Manage Item</Nav.Link>
                                <Nav.Link  as={Link} to='/addItem'>Add Item</Nav.Link>
                                <Nav.Link  as={Link} to='/myItem'>My Item</Nav.Link>
                                
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none text-white' onClick={handleSignOut} >Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;