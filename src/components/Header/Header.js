import styled from 'styled-components';

import TechStack from './TechStack';
import Nav from './Nav';
import Hero from './Hero';

function Header({width, handleScroll}) {
  return (
    <StyledHeader>
      <Nav width={width} handleScroll={handleScroll}/>
      <Hero />
      <TechStack />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  height: 100vh;
  padding: 15px;
  background-color: rgba(24,24,24);
}
`;
