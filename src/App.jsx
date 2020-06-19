import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
