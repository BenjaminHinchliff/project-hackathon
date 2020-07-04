import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { escapeRegExp } from './common';
import { HashRouter as Router } from 'react-router-dom';

describe('navbar parts exist', () => {
  it('has the correct brand', () => {
    expect.hasAssertions();
    const { getByText } = render(<Router><Navbar /></Router>);
    const navElement = getByText(/projhack/i);
    expect(navElement).toBeInTheDocument();
  });

  it('has page links', () => {
    expect.hasAssertions();
    const { getByText } = render(<Router><Navbar /></Router>);
    const links = ['home', 'about', 'news'];
    links.forEach((link) => {
      const linkRegex = new RegExp(escapeRegExp(link), 'i');
      const linkElement = getByText(linkRegex);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
