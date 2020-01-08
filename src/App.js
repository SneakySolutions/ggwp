import React from 'react';
import './App.css';
import GameRouteManager from './GameRouteManager.js';
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'>
          <h1>GG WP</h1>
        </Link>
        
        <GameRouteManager></GameRouteManager>
      </div>
    </Router>
  );
}

export default App;
