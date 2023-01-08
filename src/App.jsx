import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './css/App.css';

function App() {
   return (
      <>
         <Navigation />
         <Hero />
         <About />
         <Skills />
         <Projects />
      </>
   );
}

export default App;

