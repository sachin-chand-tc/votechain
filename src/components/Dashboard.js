import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
import ElectionCards from './ElectionCards';
import DashboardNav from './DashboardNav';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <ElectionCards />
                <DashboardNav />
            </React.Fragment>
        )
    }
}

export default Dashboard;