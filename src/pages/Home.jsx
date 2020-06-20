import React from 'react';
import news from '../assets/news';
import PageHeader from '../components/page-header';

function Home() {
  const posts = news.map(({ title, timestamp, content }, i) => {
    return (
      <div className="news-item" key={i}>
        {i > 0 && <hr />}
        <h3>{title}</h3>
        <p className="text-muted mb-1">
          Last modified: {new Date(timestamp).toLocaleString()}
        </p>
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