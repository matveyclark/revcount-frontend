import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Homepage from './components/Homepage'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={LoginForm} />
    </Router>
  );
}

export default App;
