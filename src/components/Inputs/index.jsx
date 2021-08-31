import React from 'react';
import {
  StyledInputContainer,
  StyledLabel,
  StyledRequired,
  StyledTextInput,
  StyledTextAreaInput,
} from './style';

const TextInput = ({ name, label, placeholder, required }) => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={name}>
        {label}
        {required && <StyledRequired>*</StyledRequired>}
      </StyledLabel>
      <StyledTextInput
        type='text'
        placeholder={placeholder}
        name={name}
        id={name}
        required={required}
      />
    </StyledInputContainer>
  );
};

const TextAreaInput = ({ name, label, placeholder, required }) => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={name}>
        {label}
        {required && <StyledRequired>*</StyledRequired>}
      </StyledLabel>
      <StyledTextAreaInput
        placeholder={placeholder}
        required={required}
        id={name}
        name={name}
      />
    </StyledInputContainer>
  );
};

export { TextInput, TextAreaInput };
