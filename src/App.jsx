import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

import './css/App.css';

function App() {
   return (
      <>
         <Navigation />
         <Hero />
         <About />
         <Skills />
      </>
   );
}

export default App;

