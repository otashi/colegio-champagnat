import React from 'react';
import {
  StyledInputContainer,
  StyledLabel,
  StyledRequired,
  StyledTextInput,
  StyledTextAreaInput,
  StyledSelectInput,
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

const SelectInput = ({ name, label, placeholder, options, required }) => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={name}>
        {label}
        {required && <StyledRequired>*</StyledRequired>}
      </StyledLabel>
      <StyledSelectInput name={name} id={name}>
        <option value=''>{placeholder}</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </StyledSelectInput>
    </StyledInputContainer>
  );
};

export { TextInput, TextAreaInput, SelectInput };
