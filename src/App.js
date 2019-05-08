import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Signup from './components/Signup'
import NewElection from './components/NewElection'
// import ElectionCards from './components/ElectionCards'
import { Route } from 'react-router-dom';
// import Questions from './components/Questions';
// import Question from './components/Question';
// import Callback from './actions/Callback';
// import NewQuestion from './NewQuestion/NewQuestion';
// import SecuredRoute from './SecuredRoute/SecuredRoute';
import Login from './components/Login'
// import Dashboard from './components/Dashboard'
// import Footer from './components/Footer'
// import './App.css';

import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546', null);

console.log(web3.eth.accounts);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <Footer /> */}
        {/* <Route exact path='/' component={Questions} /> */}
        {/* <Route exact path='/' component={Login} /> */}
        <Route exact path='/' component={Login} />
        {/* <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/new' component={NewElection} /> */}
        {/* <Route exact path='/question/:questionId' component={Question} />
        <Route exact path='/callback' component={Callback} />
        <SecuredRoute path='/new-question' component={NewQuestion} /> */}
      </div>
    );
  }
}

export default App;
