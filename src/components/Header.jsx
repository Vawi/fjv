import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

function Header(props) {
    return(
        <div>
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">JVTUDIES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/articles">Articles</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/glossaire">Glossaire</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
        </div>
    );
}

export default Header;