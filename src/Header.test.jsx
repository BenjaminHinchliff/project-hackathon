import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('header parts exist', () => {
  it('renders the correct title', () => {
    expect.hasAssertions();
    const { getByText } = render(<Header />);
    const linkElement = getByText(/Project Hackathon/i);
    expect(linkElement).toBeInTheDocument();
  });
});
