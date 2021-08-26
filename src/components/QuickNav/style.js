import styled from 'styled-components';

const StyledQuickNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--b500);
  color: var(--n0);
  padding: 2.4rem 1.6rem;
  cursor: pointer;
`;

const StyledQuickNavTitle = styled.h3`
  text-transform: uppercase;
  color: var(--n0);
  font-size: 1.6rem;
  font-weight: normal;
`;

const StyledIcon = styled.i``;

export { StyledQuickNav, StyledQuickNavTitle, StyledIcon };
