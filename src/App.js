import React from 'react';
import './App.css';
import RouteManager from './RouteManager.js';
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'>
          <h1>GG WP</h1>
        </Link>
        
        <RouteManager></RouteManager>
      </div>
    </Router>
  );
}

export default App;
