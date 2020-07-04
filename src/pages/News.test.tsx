import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import news from '../assets/news';

describe('news page properly loads', () => {
  it('all titles exist', () => {
    //expect.hasAssertions();
    const { getByText } = render(<Home />);
    news.forEach((item) => {
      const newsItem = getByText(new RegExp(item.title, 'i'));
      expect(newsItem).toBeInTheDocument();
    });
  });
});
