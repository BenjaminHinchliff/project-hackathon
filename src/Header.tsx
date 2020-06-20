import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Jumbotron className="mb-0 bg-info text-primary">
        <h2 className="display-2">Project Hackathon</h2>
        <p className="lead">The Best (and Also First) Hackathon Run by Campo Students for the Community</p>
      </Jumbotron>
    </header>
  );
}

export default Header;