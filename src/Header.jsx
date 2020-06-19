import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header() {
  return (
    <Jumbotron>
      <h1 className="display-2 font-weight-bold">Project Hackathon</h1>
      <p className="lead">The Best (and Also First) Hackathon Run by Campo Students for the Community</p>
    </Jumbotron>
  );
}

export default Header;
