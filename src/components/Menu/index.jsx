import React from 'react';
import { sitemap } from '../../utils/sitemap';
import {
  StyledMenu,
  StyledSection,
  StyledSectionItem,
  StyledSubsectionList,
  StyledSubsectionItem,
} from './style';

const Menu = () => {
  const sections = Object.keys(sitemap);

  return (
    <StyledMenu>
      {sections.map((section) => {
        return (
          <StyledSection>
            <StyledSectionItem>{section}</StyledSectionItem>
            <StyledSubsectionList>
              {sitemap[section].map((subsection) => (
                <StyledSubsectionItem>{subsection}</StyledSubsectionItem>
              ))}
            </StyledSubsectionList>
          </StyledSection>
        );
      })}
    </StyledMenu>
  );
};

export { Menu };
