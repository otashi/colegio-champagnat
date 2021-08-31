import React from 'react';
import {
  StyledInputContainer,
  StyledLabel,
  StyledRequired,
  StyledTextInput,
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

export { TextInput };
