import React, { useState } from 'react';
import {
  StyledQuickNav,
  StyledQuickNavHeader,
  StyledQuickNavList,
  StyledQuickNavTitle,
  StyledQuickNavLinks,
  StyledIcon,
} from './style';
import { sitemap } from '../../utils/sitemap.js';

const QuickNav = ({ section }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const subsections = sitemap[section];

  return (
    <StyledQuickNav onClick={toggleMenu}>
      <StyledQuickNavHeader>
        <StyledQuickNavTitle>Enlaces rápidos</StyledQuickNavTitle>
        {!menu ? (
          <StyledIcon className='ci-chevron_big_down' />
        ) : (
          <StyledIcon className='ci-chevron_big_up' />
        )}
      </StyledQuickNavHeader>
      {menu && (
        <StyledQuickNavList>
          {subsections.map((subsection) => (
            <StyledQuickNavLinks href='/'>{subsection}</StyledQuickNavLinks>
          ))}
        </StyledQuickNavList>
      )}
    </StyledQuickNav>
  );
};

export { QuickNav };
