import React from 'react';
import { render } from '@testing-library/react';
import About from './About';
import team from '../assets/team';

describe('page properly loads', () => {
  it('has all team members', () => {
    //expect.hasAssertions();
    const { getByText } = render(<About />);
    team.forEach((member) => {
      const newsItem = getByText(new RegExp(member.name, 'i'));
      expect(newsItem).toBeInTheDocument();
    });
  });

  it('has all roles', () => {
    const { getByText } = render(<About />);
    team.forEach((member) => {
      const newsItem = getByText(new RegExp(member.role, 'i'));
      expect(newsItem).toBeInTheDocument();
    });
  });
});
