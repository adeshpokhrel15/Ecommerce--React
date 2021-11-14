import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                 <Container>  
                    {/* <LinkContainer to="/"> */}
                        <Navbar.Brand>Online Shop</Navbar.Brand>
                    {/* </LinkContainer> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#Cart">Cart</Nav.Link>
                        <Nav.Link href="#SignIn">SignIn</Nav.Link>
                        <Nav.Link href="#" disabled>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;