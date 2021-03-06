import React from 'react'

import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'




//styled component
const Styles = styled.div`

.navbar {
    backgrouns-color : #222;
}

.navbar-brand .navbar-nav .nav-link{
    color: #bbb;

    &:hover{
        color:white;
    }
} 

`;

const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Lailah Grant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar;