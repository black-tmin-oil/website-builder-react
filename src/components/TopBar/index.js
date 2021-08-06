import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
export default function TopBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">WebSite Builder</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#start">Start</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}