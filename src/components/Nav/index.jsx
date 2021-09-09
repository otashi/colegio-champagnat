import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  StyledIcon,
  StyledNavLinks,
  StyledNavSectionsList,
  StyledNavSectionItem,
  StyledLogo,
  StyledNav,
} from './style';
import logo from '../../assets/champagnat.png';
import '../../styles/icons.css';
import { sitemap } from '../../utils/sitemap';
import { Menu } from '../Menu';
import { Link } from '../Link';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    setModal(!modal);
  };

  const sections = Object.keys(sitemap);

  return (
    <>
      <StyledNav>
        <Link to='/'>
          <StyledLogo src={logo} alt='Champagnat' />
        </Link>
        <StyledNavLinks>
          <StyledNavSectionsList>
            {sections.map((section) => (
              <StyledNavSectionItem>{section}</StyledNavSectionItem>
            ))}
          </StyledNavSectionsList>
          {!menu ? (
            <StyledIcon className='ci-hamburger' onClick={toggleMenu} />
          ) : (
            <StyledIcon className='ci-close_big' onClick={toggleMenu} />
          )}
        </StyledNavLinks>
      </StyledNav>
      {modal &&
        ReactDOM.createPortal(
          <Menu handleClick={toggleMenu} />,
          document.getElementById('modal')
        )}
    </>
  );
};

export { Nav };
