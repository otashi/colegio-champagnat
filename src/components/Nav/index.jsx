import React, { useState } from 'react';
import { StyledIcon, StyledLogo, StyledNav } from './style';
import logo from '../../assets/champagnat.png';
import '../../styles/icons.css';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <StyledNav>
      <StyledLogo src={logo} alt='Champagnat' />
      {!menu ? (
        <StyledIcon className='ci-hamburger' onClick={toggleMenu} />
      ) : (
        <StyledIcon className='ci-close_big' onClick={toggleMenu} />
      )}
    </StyledNav>
  );
};

export { Nav };
