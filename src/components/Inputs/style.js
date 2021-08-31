import styled from 'styled-components';

const StyledInputContainer = styled.div`
  display: grid;
  row-gap: 0.2rem;
  max-width: 34rem;

  @media screen and (min-width: 1024px) {
    max-width: 46rem;
  }
`;

const StyledLabel = styled.label`
  color: var(--n900);
  font-size: 1.4rem;
  line-height: 2rem;
`;

const StyledRequired = styled.span`
  color: var(--r400);
`;

const StyledTextInput = styled.input`
  color: var(--n900);
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1rem 0.8rem;
  border-radius: 0.4rem;
  border: 0.2rem solid var(--n40);

  &:focus {
    outline: none;
  }
`;

export {
  StyledInputContainer,
  StyledLabel,
  StyledRequired,
  StyledTextInput,
};
