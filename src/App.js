import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Hero} />
    </Router>
  );
}

export default App;
