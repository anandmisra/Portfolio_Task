// Home.js
import React from 'react';
import { css } from '@emotion/react';

const homeStyles = css`
  padding: 80px;
  text-align: center;
  background-color: #1a1a1a;
  color: #fff;

  h2 {
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  .info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
  }

  .info-card {
    background-color: #292a2d;
    padding: 20px;
    border-radius: 8px;
    flex: 1;
    max-width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .info-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #61dafb;
  }

  .info-card p {
    font-size: 1rem;
    line-height: 1.4;
    color: #fff;
  }
`;

const Home = () => {
  return (
    <section id="home" css={homeStyles}>
      <h2>Welcome to My Portfolio</h2>
      <p>
        Hi, I'm Anand Misra, a third-year Computer Science and Engineering student at VIT Chennai,
        specializing in Artificial Intelligence and Machine Learning. Currently, I am a MERN Full Stack Developer at Ethnus and the Associate Cloud Dev Head at Devs Dungeon.
      </p>

      <div className="info-container">
        <div className="info-card">
          <h3>Education</h3>
          <p>Bachelor's in CSE<br />VIT Chennai</p>
        </div>

        <div className="info-card">
          <h3>Specialization</h3>
          <p>Artificial Intelligence<br />and Machine Learning</p>
        </div>

        <div className="info-card">
          <h3>Work</h3>
          <p>MERN Full Stack Developer<br />at Ethnus</p>
        </div>

        <div className="info-card">
          <h3>Leadership</h3>
          <p>Associate Cloud Dev Head<br />at Devs Dungeon</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
