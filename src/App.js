import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage} />
    </Router>
  );
}

export default App;
