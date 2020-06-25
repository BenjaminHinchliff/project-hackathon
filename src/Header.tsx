import React from 'react';
import Banner from './assets/img/banner.png';
import './Header.scss';

function Header() {
  return (
    <header>
      <img id="banner" src={Banner} alt="Project Hackathon"/>
    </header>
  );
}

export default Header;
