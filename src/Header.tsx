import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Header.scss';

function Header() {
  return (
    <header>
      <Jumbotron className="mb-0 bg-info text-primary">
        <h2 className="display-2" id="main-title">Project Hackathon</h2>
        <p className="lead">The Best (and Also First) Hackathon Run by Campo Students for the Community</p>
      </Jumbotron>
    </header>
  );
}

export default Header;
