import React, { Component } from "react";
import { Row, Col, Form, Button, Card, Container } from 'react-bootstrap'
import axios from 'axios'

class NewElection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            electionName: '',
            selectedOption: '',
            electionDetails: '',
            address: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAddressChange(value) {
        this.setState({
            address: value
        })
    }

    handleNameChange(value) {
        this.setState({
            electionName: value
        })
    }
    handleDetailChange(value) {
        this.setState({
            electionDetails: value
        })
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };
    handleSubmit() {
        let election = {
            name: this.state.electionName,
            details: this.state.electionDetails,
            totCandidate: this.state.selectedOption,
            address: this.state.address
        }
        if (election.details !== '' && election.name !== '' && election.totCandidate !== '' && election.address !== '') {
            axios.post('http://localhost:8081/new', election)
                .then(res => {
                    if (res.data === true) alert("Sucess");
                    else alert("Plese try again");
                })
        }
        else alert("Please fill all details");
    }
    render() {
        return (
            < div style={{ marginTop: '50px' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <Card >
                                <Card.Header>New Election</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group as={Row} controlId="formHorizontalName">
                                            <Form.Label column sm={2}>
                                                Election Name
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control
                                                    onBlur={(e) => { this.handleNameChange(e.target.value) }}
                                                    type="text" placeholder="Name of new election" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalAddress">
                                            <Form.Label column sm={2}>
                                                Election contract address
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control
                                                    onBlur={(e) => { this.handleAddressChange(e.target.value) }}
                                                    type="text" placeholder="Contract address" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formDetails">
                                            <Form.Label column sm={2}>
                                                Election Details
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control
                                                    onBlur={(e) => { this.handleDetailChange(e.target.value) }}
                                                    as="textarea" rows="4" placeholder="Election Details" />
                                            </Col>
                                        </Form.Group>
                                        <fieldset>
                                            <Form.Group as={Row}>
                                                <Form.Label as="legend" column sm={2}>
                                                    Total Number of Candidates
                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        inline
                                                        label="2"
                                                        value="2"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios1"
                                                        checked={this.state.selectedOption === "2"}
                                                        onChange={this.handleOptionChange}
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        inline
                                                        label="3"
                                                        value="3"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2"
                                                        checked={this.state.selectedOption === "3"}
                                                        onChange={this.handleOptionChange}
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        inline
                                                        label="4"
                                                        value="4"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios3"
                                                        checked={this.state.selectedOption === "4"}
                                                        onChange={this.handleOptionChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </fieldset>
                                        <Form.Group as={Row} controlId="formHorizontal1">
                                            <Form.Label column sm={2}>
                                                Name of candidate 1
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="Name" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontal2">
                                            <Form.Label column sm={2}>
                                                Name of candidate 2
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="Name" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontal3">
                                            <Form.Label column sm={2}>
                                                Name of candidate 3
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="Name" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontal4">
                                            <Form.Label column sm={2}>
                                                Name of candidate 4
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="Name" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Col sm={{ span: 10, offset: 2 }}>
                                                <Button type="submit">Create new election</Button>
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

export default NewElection;