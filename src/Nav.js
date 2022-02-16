import { useState } from 'react';

function Nav({width, handleScroll}) {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(bool => !bool);
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
      <img id="hamburger" alt="Hamburger icon for mobile menu" src='/images/hamburger.png' onClick={toggleMenu}/>
    )
  }

  return (
    <nav>
        <div id="nav-top">
            <img id="logo" src="/images/logo.png" alt="Site logo"/>
            {width >= 650 ? <ButtonList /> : <Hamburger />}
        </div>
        {openMenu ? <ButtonList /> : <></>}
    </nav>
  );
}

export default Nav;