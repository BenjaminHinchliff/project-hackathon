import React from 'react';
import { Container } from 'react-bootstrap';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import NavbarComponent from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Footer';
import FourOFour from './pages/FourOFour';

function App() {
  return (
    <Router basename="/" hashType="slash" >
      <Container>
        <Header />
        <NavbarComponent />
        <Container className="page-content bg-light pb-2">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={FourOFour} />
          </Switch>
        </Container>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
