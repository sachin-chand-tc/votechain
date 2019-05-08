import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Ballot from './ballot.png'
class ElectionCard extends Component {
    render() {
        return (
            <div>
                <Card border="dark" style={{ width: '12rem', height: '10rem' }}>
                    <Card.Header>click on find more to go to each election</Card.Header>
                    <Card.Img variant="top" src={Ballot} />
                    <Card.Body>
                        <Card.Title>{this.props.electionName}</Card.Title>
                        <Card.Text>
                            {this.props.electionDetails}
                        </Card.Text>
                        <Button variant="primary">Find more</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ElectionCard;