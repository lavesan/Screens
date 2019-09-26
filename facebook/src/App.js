import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import HeaderComponent from './components/header';
import HomePage from './pages/home';
import './App.css';

const theme = {
  primaryColor: '#3b5998',
  secondaryColor: '#385898',
  terciaryColor: '#2f477a',
  blankColor: '#fff',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" render={() => <Redirect to='/home' />} />
            <Route path="/home" render={() => <HomePage /> } />
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
