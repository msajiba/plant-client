import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../../Firebase/Firebase-init';
import Loading from '../Loading/Loading';
import './Header.css';
import MenuListComposition from './MenuListComposition';


const Header = () => {

    const [user,loading] = useAuthState(auth);
   
    if(loading){
        return <Loading />
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="#home">
                        {/* <img className='w-25' src={logo} alt="" /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        
                    </Nav>

                    <Nav className='fs-6'>
                        {
                            user? <>

                                        <Nav.Link as={Link} to="/manage-inventory" > Manage Items </Nav.Link>   
                                        <Nav.Link as={Link} to="/inventory-add"> Add Item </Nav.Link>   
                                        <Nav.Link as={Link} to="/my-items"> My Items </Nav.Link>    
                                        <Nav.Link as={Link} to="/home"> <MenuListComposition /> </Nav.Link>
                                        
                                  </>
                                : <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register"> Register </Nav.Link>
                                  </>
                                 
                                
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        
        </>
    );
};

export default Header;