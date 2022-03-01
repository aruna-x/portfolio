import { useState } from 'react';

function Nav({width, handleScroll}) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setOpenMobileMenu(bool => !bool);
  }

  const ButtonList = () => {
    return (
      <div id="button-list">
        <button onClick={() => handleScroll("about")}>about</button>
        <button onClick={() => handleScroll("projects")}>projects</button>
        <button onClick={() => window.location.href='https://dev.to/aruna'}>blog</button>
        <button onClick={() => handleScroll("contact")}>contact</button>
      </div>
    )
  }

  const Hamburger = () => {
    return (
      <img id="hamburger" alt="Hamburger icon for mobile menu" src='/portfolio/images/hamburger.png' onClick={toggleMobileMenu}/>
    )
  }

  return (
    <nav>
        <div id="nav-top">
            <img id="logo" src="/portfolio/images/logo.png" alt="Site logo"/>
            {width >= 650 ? <ButtonList /> : <Hamburger />}
        </div>
        {openMobileMenu ? <ButtonList /> : <></>}
    </nav>
  );
}

export default Nav;