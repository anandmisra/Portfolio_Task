import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

