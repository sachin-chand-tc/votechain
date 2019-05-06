import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import Questions from './components/Questions';
import Question from './components/Question';
import Callback from './actions/Callback';
import NewQuestion from './NewQuestion/NewQuestion';
import SecuredRoute from './SecuredRoute/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Questions} />
        <Route exact path='/question/:questionId' component={Question} />
        <Route exact path='/callback' component={Callback} />
        <SecuredRoute path='/new-question' component={NewQuestion} />
      </div>
    );
  }
}

export default App;
