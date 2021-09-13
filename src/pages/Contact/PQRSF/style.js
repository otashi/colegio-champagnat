import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  margin: 3.2rem 0;
  row-gap: 0.8rem;

  @media screen and (min-width: 340px) {
    grid-template-columns: 34rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 46rem;
  }
`;

export { StyledForm };
