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
import { routes } from '../../utils/routes';
import { Link } from '../Link';
import { Anchor } from '../Anchor';

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
          {subsections.map((subsection) => {
            if (section !== 'Portales') {
              return (
                <Link to={routes[subsection]} key={subsection}>
                  <StyledQuickNavLinks>{subsection}</StyledQuickNavLinks>
                </Link>
              );
            } else {
              return (
                <Anchor href={routes[subsection]} key={subsection}>
                  <StyledQuickNavLinks>{subsection}</StyledQuickNavLinks>
                </Anchor>
              );
            }
          })}
        </StyledQuickNavList>
      )}
    </StyledQuickNav>
  );
};

export { QuickNav };
