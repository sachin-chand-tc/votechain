import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../logo.svg';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#129186" }}>
                    <Navbar.Brand href="http://localhost:3000/">
                        <img
                            alt=''
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' VoteChain'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link eventKey={2} href="https://drive.google.com/file/d/1x4YJsl17XkJfFtF3SNGel9t_v0dp-JW5/view?usp=sharing">
                                See Project Report
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="http://localhost:3000/">Login</Nav.Link>
                            <Nav.Link href="http://localhost:3000/signup">Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;