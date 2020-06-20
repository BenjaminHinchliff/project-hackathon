import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('navbar parts exist', () => {
  it('has the correct brand', () => {
    expect.hasAssertions();
    const { getByText } = render(<Navbar />);
    const navElement = getByText(/projhack/i);
    expect(navElement).toBeInTheDocument();
  });

  it('has page links', () => {
    expect.hasAssertions();
    const { getByText } = render(<Navbar />);
    const homeLink = getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
    const aboutLink = getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
  });
});
