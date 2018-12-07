import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Landing from './components/Landing';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path='/' component={ Landing } />
            <Switch>
              <Route path='/user' render={()=> <Profile /* Props go here. */ />} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
