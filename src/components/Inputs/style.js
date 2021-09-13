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

const StyledTextAreaInput = styled.textarea`
  color: var(--n900);
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1rem 0.8rem;
  border-radius: 0.4rem;
  border: 0.2rem solid var(--n40);
  max-height: 16rem;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const StyledSelectInput = styled.select`
  color: var(--n900);
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1rem 0.8rem;
  border-radius: 0.4rem;
  border: 0.2rem solid var(--n40);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const StyledRadioInput = styled.input``;

const StyledRadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--n900);
`;

export {
  StyledInputContainer,
  StyledLabel,
  StyledRequired,
  StyledTextInput,
  StyledTextAreaInput,
  StyledSelectInput,
  StyledRadioInput,
  StyledRadioGroup,
};
