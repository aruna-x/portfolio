import TechStack from './TechStack';
import Nav from './Nav';
import Hero from './Hero';

function Header({width, handleScroll}) {
  return (
    <header id="header-wrapper">
      <Nav width={width} handleScroll={handleScroll}/>
      <Hero />
      <TechStack />
    </header>
  );
}

export default Header;
