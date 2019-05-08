import React, { Component } from "react";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
// import { Route } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(value) {
        this.setState({
            username: value
        })
    }
    handlePassChange(value) {
        this.setState({
            password: value
        })
    }
    handleSubmit() {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if (user.username !== '' && user.password !== '') {
            axios.post('http://localhost:8081', user)
                .then(res => {
                    if (res.data === true) alert("hello");
                    else alert("Please try again");
                })
        }
        else {
            alert("Please fill all details");
        }


    }

    render() {
        return (
            < div style={{ marginTop: '50px' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <Card >
                                <Card.Header>Sign In</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="formBasicText">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                onBlur={(e) => { this.handleUserChange(e.target.value) }}
                                                type="text" placeholder="Enter username" />
                                            <Form.Text className="text-muted">
                                                We'll never share your personal details with anyone else.
                                        </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                onBlur={(e) => { this.handlePassChange(e.target.value) }} type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicChecbox">
                                            <Form.Check type="checkbox" label="Election Administrator" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                    </Button>
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

export default Login;