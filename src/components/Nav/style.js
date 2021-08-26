import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem;
  background-color: var(--n10);
  box-shadow: 0 0.1rem 0.1rem 0 var(--n50a);
`;

const StyledNavLinks = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const StyledNavSectionsList = styled.ul`
  display: none;
  @media screen and (min-width: 1024px) {
    list-style: none;
    padding: 0;
    display: flex;
    height: 100%;
  }
`;

const StyledNavSectionItem = styled.li`
  padding: 0 0.4rem;
  cursor: pointer;
  height: 100%;
  color: var(--n900);
  &:hover {
    color: var(--b500);
  }
`;

const StyledIcon = styled.i`
  color: var(--n900);
  cursor: pointer;
`;

const StyledLogo = styled.img`
  width: 4rem;
  height: auto;
  cursor: pointer;
`;

export {
  StyledNav,
  StyledNavLinks,
  StyledNavSectionsList,
  StyledNavSectionItem,
  StyledIcon,
  StyledLogo,
};
