import { useState, useEffect } from 'react';

import Header from './Header/Header';
import About from './About/About';
import Projects from './About/Projects';
import Contact from './Contact/Contact';

import '../style/app.css';

function App() {
  const [width, setWindowWidth] = useState(0);
  
  function updateDimensions() {
    setWindowWidth(width => window.innerWidth);
  }

  useEffect(updateDimensions,[]);

  function handleScroll(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <Header width={width} handleScroll={handleScroll}/>
      <div id="middle-contents">
        <About/>
        <Projects handleScroll={handleScroll}/>
      </div>
      <Contact />
    </>
    
  );
}

export default App;
