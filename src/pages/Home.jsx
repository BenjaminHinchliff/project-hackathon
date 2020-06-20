import React from 'react';
import { Container } from 'react-bootstrap';
import news from '../assets/news';
import PageHeader from '../components/page-header';

function Home() {
  const posts = news.map((item) => {
    const { title, content } = item;

    return (
      <div class="news-item">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  });

  return (
    <>
      <PageHeader>Latest News</PageHeader>
      {posts}
    </>
  );
}

export default Home;