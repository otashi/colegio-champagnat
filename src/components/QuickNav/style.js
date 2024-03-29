import styled from 'styled-components';

const StyledQuickNav = styled.div`
  background-color: var(--b500);
  color: var(--n0);
  padding: 2.4rem 1.6rem;

  @media screen and (min-width: 1024px) {
    grid-row-start: 1;
  }
`;

const StyledQuickNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0 auto;
  max-width: 1024px;
`;

const StyledQuickNavTitle = styled.h3`
  text-transform: uppercase;
  color: var(--n0);
  font-size: 1.6rem;
  font-weight: normal;
`;

const StyledQuickNavList = styled.ul`
  list-style: none;
  margin: 3.2rem auto 0;
  max-width: 1024px;
  padding: 0 0 0 0.8rem;

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 3.2rem;
  }
`;

const StyledQuickNavLinks = styled.li`
  margin-bottom: 0.8rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledIcon = styled.i``;

export {
  StyledQuickNav,
  StyledQuickNavHeader,
  StyledQuickNavTitle,
  StyledQuickNavList,
  StyledQuickNavLinks,
  StyledIcon,
};
