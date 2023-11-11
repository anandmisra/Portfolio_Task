// Contact.js
import React from 'react';
import { css } from '@emotion/react';

const contactStyles = css`
  padding: 80px;
  text-align: center;
  background-color: #1a1a1a;
  color: #fff;

  h2 {
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
  }

  .contact-card {
    background-color: #292a2d;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: left;
  }

  .contact-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #61dafb;
  }

  .contact-card p {
    font-size: 1rem;
    line-height: 1.4;
    color: #fff;
    margin-bottom: 15px;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
  }

  .contact-link {
    text-decoration: none;
    color: #61dafb;
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #61dafb;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #61dafb;
      color: #fff;
    }
  }
`;

const Contact = () => {
  return (
    <section id="contact" css={contactStyles}>
      <h2>Contact Me</h2>

      <div className="contact-card">
        <h3>LinkedIn Profile</h3>
        <p>Connect with me on LinkedIn to stay updated on my professional journey.</p>
        <a href="https://www.linkedin.com/in/anandmisra11/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
      </div>

      <div className="contact-card">
        <h3>GitHub</h3>
        <p>Explore my projects and contributions on GitHub.</p>
        <a href="https://github.com/anandmisra" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub Profile</a>
      </div>

      <div className="contact-card">
        <h3>Email</h3>
        <p>Feel free to reach out via email for any inquiries or collaboration.</p>
        <a href="mailto:anandmisra.11112003@gmail.com" className="contact-link">Email</a>
      </div>

    </section>
  );
};

export default Contact;
