import React, { Component } from 'react'
import ElectionCard from './ElectionCard'
import { Container, Col, Row } from 'react-bootstrap'

class ElectionCards extends Component {
    state = {
        elections: [
            { electionId: 1, electionName: "Sachin Chand" },
            { electionid: 2, electionName: "Sunil Chand" },
            { electionid: 3, electionName: "Saasdhin Chand" },
            { electionid: 4, electionName: "Saffhin Chand" },
        ]
    }
    render() {
        return (
            <div style={{ marginTop: '50px' }}>
                <Container>
                    <Row>
                        {this.state.elections.map(election => (
                            <Col style={{ marginTop: '20px' }} >
                                <ElectionCard
                            key={election.Id}
                            electionId={election.electionId}
                            electionName={election.electionName}
                        />
                            </Col>
                    ))}

                    </Row>
                </Container>


            </div >

        )
    }
}

export default ElectionCards;