import React from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';
import Circle from '../assets/images/circle.png';

const NavBar = (props) => {
    return <Navbar>
        <Navbar.Brand href="#lumologo" className="brand">LUMO LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
            <Nav id="justify-content-end">
                <Nav.Link href="#learn" className="navlink">LEARN</Nav.Link>
                <Nav.Link href="#book" className="navlink">BOOK</Nav.Link>
                <Image src={Circle} roundedCircle style={{height: "60px", width: "60px"}}/>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default NavBar;