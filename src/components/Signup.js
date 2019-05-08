import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Container } from 'react-bootstrap'
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            enrollment: '',
            // public_key: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(value) {
        this.setState({
            username: value
        })
    }
    handleEnrollChange(value) {
        this.setState({
            enrollment: value
        })
    }
    handlePassChange(value) {
        this.setState({
            password: value
        })
    }
    // handleKeyChange(value) {
    //     this.setState({
    //         public_key: value
    //     })
    // }
    handleSubmit() {
        let user = {
            username: this.state.username,
            password: this.state.password,
            enrollment: this.state.enrollment,
            // public_key: this.state.public_key
        }
        alert(user);
        if (user.username !== '' && user.password !== '' && user.enrollment !== '')
            axios.post('http://localhost:8081/signup', user)
                .then(res => {
                    if (res.data === true) alert("Sucess");
                    else alert("Plese try again");
                })
    }

    render() {
        return (
            < div style={{ marginTop: '50px' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card >
                                <Card.Header>Sign Up</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group as={Row} controlId="formHorizontal">
                                            <Form.Label column sm={2}>
                                                Username
                                </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control
                                                    onBlur={(e) => { this.handleUserChange(e.target.value) }}
                                                    type="text" placeholder="Username" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formHorizontalPassword">
                                            <Form.Label column sm={2}>
                                                Password
                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control
                                                    onBlur={(e) => { this.handlePassChange(e.target.value) }}
                                                    type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                        {/* <Form.Group as={Row} controlId="formHorizontalPassword">
                                            <Form.Label column sm={2}>
                                                Account Address
                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control
                                                    onBlur={(e) => { this.handleKeyChange(e.target.value) }}
                                                    type="text" placeholder="Public Key" />
                                            </Col>
                                        </Form.Group> */}
                                        <Form.Group as={Row} controlId="formHorizontalEnroll">
                                            <Form.Label column sm={2}>
                                                Enrollment Number
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control
                                                    onBlur={(e) => { this.handleEnrollChange(e.target.value) }}
                                                    type="text" placeholder="Enrollment number" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Col sm={{ span: 10, offset: 2 }}>
                                                <Button type="submit">Sign up</Button>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div >
        )
    }
}

export default Signup;