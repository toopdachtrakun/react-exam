import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './index.css';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);