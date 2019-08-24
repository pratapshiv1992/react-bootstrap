import React from 'react';
import {Navbar,Nav,Image} from 'react-bootstrap';
import Circle from '../assets/images/circle.png';

const NavBar = (props)=>{
    return <Navbar>
        <Navbar.Brand href="" >LUMO LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
            <Nav id="justify-content-end">
                <Nav.Link href="" className="text-bold color-black">Learn</Nav.Link>
                <Nav.Link href="" className="text-bold color-black">Book</Nav.Link>
                <Image src={Circle} roundedCircle style={{height:"50px",width:"50px"}} />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default NavBar;