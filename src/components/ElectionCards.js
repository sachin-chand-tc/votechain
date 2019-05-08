import React, { Component } from 'react'
import ElectionCard from './ElectionCard'
import { Container, Col, Row } from 'react-bootstrap'

class ElectionCards extends Component {
    state = {
        elections: [
            {
                electionId: 1, electionName: "Election 1",
                electionDetails: "Election for new Vice President of Art Club of our College."
            },
            {
                electionid: 2, electionName: "Election 2",
                electionDetails: "Election for new Mess incharge of Aryabhatta Hostel Mess."
            },
            {
                electionid: 3, electionName: "Election 3",
                electionDetails: "Vice President of Students' Union."
            },
            {
                electionid: 4, electionName: "Election 4",
                electionDetails: "Election for new Head of Department of CSE."
            }
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
                                    Id={election.electionId}
                                    electionName={election.electionName}
                                    electionDetails={election.electionDetails}
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