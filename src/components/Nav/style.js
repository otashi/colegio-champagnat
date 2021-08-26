import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem;
  background-color: var(--n10);
  box-shadow: 0 0.1rem 0.1rem 0 var(--n50a);
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

export { StyledNav, StyledIcon, StyledLogo };
