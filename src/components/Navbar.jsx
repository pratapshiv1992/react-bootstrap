import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

const NavBar = (props)=>{
    return <Navbar>
        <Navbar.Brand href="" >LUMO LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
            <Nav id="justify-content-end">
                <Nav.Link href="">Learn</Nav.Link>
                <Nav.Link href="">Book</Nav.Link>
                <Nav.Link href=""><span>O</span></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default NavBar;