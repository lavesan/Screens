import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import HeaderComponent from './components/header';
import HomePage from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/home' />} />
          <Route path="/home" render={() => <HomePage /> } />
        </Switch>
    </Router>
  );
}

export default App;
