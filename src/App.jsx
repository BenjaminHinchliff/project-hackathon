import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import NavbarComponent from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <NavbarComponent />
        <div className="page-content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <hr />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
