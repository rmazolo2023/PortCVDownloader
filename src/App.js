// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education/>
      <Projects />
      <Skills />
      <Experience/>
      <Contacts />
    </div>
  );
}

export default App;
