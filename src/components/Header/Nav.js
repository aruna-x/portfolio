import { useState } from 'react';
import styled from 'styled-components';

function Nav({width, handleScroll}) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setOpenMobileMenu(bool => !bool);
  }

  const ButtonList = () => {
    return (
      <StyledButtonList>
        <Button onClick={() => handleScroll("about")}>about</Button>
        <Button onClick={() => handleScroll("projects")}>projects</Button>
        <Button onClick={() => window.location.href='https://dev.to/aruna'}>blog</Button>
        <Button onClick={() => handleScroll("contact")}>contact</Button>
      </StyledButtonList>
    )
  }

  const Hamburger = () => {
    return (
      <StyledHamburger alt="Hamburger icon for mobile menu" src='/portfolio/images/hamburger.png' onClick={toggleMobileMenu}/>
    )
  }

  return (
    <StyledNav>
        <NavTop>
            <Logo id="logo" src="/portfolio/images/logo.png" alt="Site logo"/>
            {width >= 650 ? <ButtonList /> : <Hamburger />}
        </NavTop>
        {/* openMobileMenu only exists if we have width >= 650 
        todo: bless this mess, then fix it :) */}
        {openMobileMenu ? <ButtonList /> : <></>}
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled.nav`
  margin: 25px;
`;

const NavTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 70px;
`;

const StyledHamburger = styled.img`
  height: 30px;
  margin: auto 0;
  visibility: hidden;

  @media only screen and (max-width: 650px) {
    height: 30px;
    margin: auto 0;
    visibility: visible;
  }
`;

const StyledButtonList = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;

  @media only screen and (max-width: 650px) {
    flex-direction: column;
    margin-top: 15px;
    z-index: 10;
  }
`;

const Button = styled.button`
  background-color: rgba(24, 24, 24, 1);
  z-index: 10;

  border: 1px solid #bbb;
  border-radius: 5px;
  padding: 11px 18px;
  margin: auto 7px;
  color: #bbb;

  &:hover {
    color: white;
    border: 1px solid white;
  }

  @media only screen and (max-width: 650px) {
    border: none;
    border-radius: 0;
    width: 100%;
    background-color: white;
    padding: 17px 20px;
    color: black;
    z-index: 10;
  }
`;
