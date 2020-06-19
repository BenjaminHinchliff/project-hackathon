import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
