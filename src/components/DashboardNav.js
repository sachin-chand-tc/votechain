import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'

class DashboardNav extends Component {
    render() {
        return (
            <div style={{ marginTop: '50px' }}>
                        <Nav variant="pills" defaultActiveKey="http://localhost:3000/dashboard" className="flex-column">
                        <Nav.Link eventKey="disabled" disabled>    Sachin Chand  </Nav.Link>
                            <Nav.Link href="http://localhost:3000/dashboard">Home</Nav.Link>
                            <Nav.Link href="">My details</Nav.Link>
                            <Nav.Link href="http://localhost:3000/">Log out</Nav.Link>
                        </Nav>
            </div>
        )
    }
}

export default DashboardNav;