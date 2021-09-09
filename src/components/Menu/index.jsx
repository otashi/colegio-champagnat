import React from 'react';
import { sitemap } from '../../utils/sitemap';
import { routes } from '../../utils/routes';
import {
  StyledMenu,
  StyledSection,
  StyledSectionItem,
  StyledSubsectionList,
  StyledSubsectionItem,
} from './style';
import { Blanket } from '../Blanket';
import { Link } from '../Link';
import { Anchor } from '../Anchor';

const Menu = ({ handleClick }) => {
  const sections = Object.keys(sitemap);

  return (
    <Blanket>
      <StyledMenu>
        {sections.map((section) => {
          return (
            <StyledSection>
              <StyledSectionItem onClick={handleClick}>
                <Link to={routes[section]}>{section}</Link>
              </StyledSectionItem>
              <StyledSubsectionList>
                {sitemap[section].map((subsection) => (
                  <StyledSubsectionItem onClick={handleClick}>
                    {section !== 'Portales' ? (
                      <Link to={routes[subsection]}>{subsection}</Link>
                    ) : (
                      <Anchor href={routes[subsection]}>{subsection}</Anchor>
                    )}
                  </StyledSubsectionItem>
                ))}
              </StyledSubsectionList>
            </StyledSection>
          );
        })}
      </StyledMenu>
    </Blanket>
  );
};

export { Menu };
