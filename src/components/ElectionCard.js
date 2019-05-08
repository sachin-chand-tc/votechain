import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class ElectionCard extends Component {
    render() {
        return (
            <div>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>{this.props.electionId}</Card.Header>
                    <Card.Img variant="top" src="candidate.png" />
                    <Card.Body>
                        <Card.Title>{this.props.electionName}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                         </Card.Text>
                        <Button variant="primary">Find more</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ElectionCard;