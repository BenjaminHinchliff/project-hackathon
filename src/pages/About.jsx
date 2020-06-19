import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import team from '../dynamic-information/team';
import './About.scss';

function About() {
  const cards = [];
  team.forEach((member) => {
    const { name, role, description } = member;

    cards.push(
      <Card className="team-card m-2">
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
    <Container>
      <h4 className="display-4">Our Team</h4>
      <hr />
      <Row id="our-team">
        {cards}
      </Row>
    </Container>
  );
}

export default About;