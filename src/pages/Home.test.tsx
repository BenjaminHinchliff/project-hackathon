import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { escapeRegExp } from '../common';

describe('page properly loads', () => {
  it('all social links exist', () => {
    //expect.hasAssertions();
    const { getByAltText } = render(<Home />);
    const socials = ['instagram', 'gmail'];
    socials.forEach((social) => {
      const newsItem = getByAltText(new RegExp(escapeRegExp(social), 'i'));
      expect(newsItem).toBeInTheDocument();
    });
  });
});
