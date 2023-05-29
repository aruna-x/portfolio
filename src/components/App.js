import { useState, useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyles';
import Header from './Header/Header';
import About from './About/About';
import Projects from './About/Projects';
import Contact from './Contact/Contact';

function App() {
  const [width, setWindowWidth] = useState(0);
  
  function updateDimensions() {
    setWindowWidth(() => window.innerWidth);
  }

  useEffect(updateDimensions,[]);

  function handleScroll(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <GlobalStyle />
      <Header width={width} handleScroll={handleScroll}/>
      <StyledContents>
        <About/>
        <Projects handleScroll={handleScroll}/>
      </StyledContents>
      <Contact />
    </>
    
  );
}

export default App;

const StyledContents = styled.div`
  width: 80vw;
  margin: auto auto;
  background-color: white;
`;
