import React from 'react';
import PageHeader from '../components/page-header';
import InstagramLogo from '../assets/img/instagram-logo.webp';
import GmailLogo from '../assets/img/gmail-logo.png';
import './Home.scss';

function Home() {
  return (
    <>
      <PageHeader>Social Media</PageHeader>
      <p>
        <a href="https://www.instagram.com/projecthackathon/"
          rel="noopener noreferrer"
          target="_blank"
          className="social-logo">
          <img src={InstagramLogo} alt="Instagram" />
        </a>
        <a href="mailto:campohackathon@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="social-logo">
          <img src={GmailLogo} alt="Gmail" />
        </a>
      </p>
    </>
  );
}

export default Home;