import TechStack from './TechStack';
import Nav from './Nav';
import Hero from './Hero';

function Header({width, handleScroll}) {
  return (
    <>
      <div id="header-wrapper">
        <Nav width={width} handleScroll={handleScroll}/>
        <Hero />
        <TechStack />
      </div>
    </>
    
  );
}

export default Header;