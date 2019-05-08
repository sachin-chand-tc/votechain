import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', left: '0', bottom: '0', width: '100%',backgroundColor:"#129186" }}>
                <p className="text-center mt-4 mb-4">Votechain, A project by students of NIT Agartala</p>
                <Nav className="justify-content-center" activeKey="/home">    <Nav.Item>
                    <Nav.Link href="https://drive.google.com/file/d/1x4YJsl17XkJfFtF3SNGel9t_v0dp-JW5/view?usp=sharing">Report</Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="http://localhost:3000/" eventKey="link-1">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="http://localhost:3000/signup"eventKey="link-2">Signup</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div >

        )
    }

}
export default Footer;