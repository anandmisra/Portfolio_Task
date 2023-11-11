// Header.js
import React from 'react';
import { css } from '@emotion/react';

const headerStyles = css`
  background-color: #292a2d;
  color: #61dafb;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;

  h1 {
    margin: 0;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
  }

  nav {
    margin-top: 10px;

    a {
      margin: 0 15px;
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
      transition: color 0.3s;

      &:hover {
        color: #61dafb;
      }
    }
  }
`;

const Header = () => {
  return (
    <header css={headerStyles}>
      <h1>Anand Misra</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
