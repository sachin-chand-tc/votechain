import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Signup from './components/Signup'
import NewElection from './components/NewElection'
import { Route } from 'react-router-dom';
// import Questions from './components/Questions';
// import Question from './components/Question';
// import Callback from './actions/Callback';
// import NewQuestion from './NewQuestion/NewQuestion';
// import SecuredRoute from './SecuredRoute/SecuredRoute';
import DashboardAdmin from './components/DashboardAdmin';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Footer />
        {/* <Route exact path='/' component={Questions} /> */}
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/new' component={NewElection} />
        <Route exact path='/admindashboard' component={DashboardAdmin} />
        {/* <Route exact path='/question/:questionId' component={Question} />
        <Route exact path='/callback' component={Callback} />
        <SecuredRoute path='/new-question' component={NewQuestion} /> */}
      </div>
    );
  }
}

export default App;
