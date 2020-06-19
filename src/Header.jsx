import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header() {
  return (
    <Jumbotron className="mb-0">
      <h2 className="display-2">Project Hackathon</h2>
      <p className="lead">The Best (and Also First) Hackathon Run by Campo Students for the Community</p>
    </Jumbotron>
  );
}

export default Header;
