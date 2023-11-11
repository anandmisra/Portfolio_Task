// Projects.js
import React from 'react';
import { css } from '@emotion/react';

const projectsStyles = css`
  padding: 80px;
  text-align: center;
  background-color: #292a2d;
  color: #fff;

  h2 {
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
  }

  .project-card {
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: left;
  }

  .project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #61dafb;
  }

  .project-card ul {
    list-style-type: disc;
    margin-left: 20px;
    padding: 0;
  }

  .project-card li {
    font-size: 1rem;
    line-height: 1.4;
    color: #fff;
    margin-bottom: 10px;
  }
`;

const Projects = () => {
  return (
    <section id="projects" css={projectsStyles}>
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Home Automation</h3>
        <ul>
          <li>Implemented a home automation system using NodeMCU (ESP8266) and a relay module.</li>
          <li>Connected it to the Arduino IoT Cloud and integrated it with Alexa for voice commands.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Task Sheet</h3>
        <ul>
          <li>Developed and deployed a responsive web application for task management.</li>
          <li>Consolidated all work during my MERN Full Stack Developer internship in one centralized platform.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Walmart Marketing Analysis</h3>
        <ul>
          <li>Conducted a comprehensive marketing analysis using a dataset from Walmart's database.</li>
          <li>Applied data analysis techniques to predict future sales for various products.</li>
          <li>Contributed valuable insights for strategic decision-making.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
