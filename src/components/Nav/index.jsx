import React from 'react';
import { StyledIcon, StyledLogo, StyledNav } from './style';
import logo from '../../assets/champagnat.png';
import '../../styles/icons.css';

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo src={logo} alt='Champagnat' />
      <StyledIcon className='ci-hamburger' />
    </StyledNav>
  );
};

export { Nav };
