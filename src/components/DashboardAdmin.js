import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'

import ElectionCard from './ElectionCard';

class Dashboard extends Component {
    state = {
        elections: [
            {
                electionId: 1, electionName: "Election 1",
                electionDetails: "Not Published"
            },
            {
                electionid: 23, electionName: "Election 2",
                electionDetails: "Published"
            }
        ]
    }
    render() {
        return (
            <div style={{marginTop:"100px"}}>
                
            <Container>
                <Row>
                    <Col md="2">
                        <Nav variant="pills" defaultActiveKey="http://localhost:3000/admindashboard" className="flex-column">
                            <Nav.Link eventKey="disabled" disabled>  Admin Account  </Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>    Sachin Chand  </Nav.Link>
                            <Nav.Link href="http://localhost:3000/admindashboard">Home</Nav.Link>
                            <Nav.Link href="http://localhost:3000/new">Create New Election</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                {this.state.elections.map(election => (
                                    <Col style={{ marginTop: '20px' }} >
                                        <ElectionCard
                                            key={election.Id}
                                            Id={election.electionId}
                                            electionName={election.electionName}
                                            electionDetails={election.electionDetails}
                                        />
                                    </Col>
                                ))}

                            </Row>
                        </Container>

                        )
                    }
                }
                    </Col>
                </Row>
            </Container>

            </div>
        )
    }
}

export default Dashboard;