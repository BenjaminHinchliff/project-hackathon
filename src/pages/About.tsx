import React from 'react';
import { Container, Card } from 'react-bootstrap';
import PageHeader from '../components/page-header';
import team from '../assets/team';
import blankAvatar from '../assets/img/blank-avatar.jpg';
import './About.scss';

function About() {
  const cards = team.map(({ img, name, role, description }, i) => {
    return (
      <Card className="team-card m-2" key={i}>
        <Card.Img variant="top" src={img || blankAvatar} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <PageHeader>Our Mission</PageHeader>
      <p>
        I really don't know what to put here sooooooooo:<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <PageHeader>Our Team</PageHeader>
      <Container className="d-inline-flex justify-content-around flex-wrap">
        {cards}
      </Container>
    </>
  );
}

export default About;