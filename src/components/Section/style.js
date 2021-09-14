import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: var(--n10);
  padding: 1.6rem 1.6rem 3.2rem;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    min-width: 1024px;
  }
`;

export { StyledSection };
