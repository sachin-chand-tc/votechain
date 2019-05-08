import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ElectionCards from './ElectionCards';
import DashboardNav from './DashboardNav';

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="2">
                        <DashboardNav />
                    </Col>
                    <Col>
                        <ElectionCards />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard;