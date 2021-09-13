import React from 'react';
import {
  StyledInputContainer,
  StyledLabel,
  StyledRequired,
  StyledTextInput,
  StyledTextAreaInput,
  StyledSelectInput,
  StyledRadioInput,
  StyledRadioGroup,
} from './style';

const Input = ({ name, label, placeholder, required, type }) => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={name}>
        {label}
        {required && <StyledRequired>*</StyledRequired>}
      </StyledLabel>
      <StyledTextInput
        type={type}
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

const SelectInput = ({ name, label, placeholder, options = [], required }) => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={name}>
        {label}
        {required && <StyledRequired>*</StyledRequired>}
      </StyledLabel>
      <StyledSelectInput name={name} id={name}>
        <option value=''>{placeholder}</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </StyledSelectInput>
    </StyledInputContainer>
  );
};

const RadioInput = ({ name, label, options = [], required }) => {
  return (
    <StyledInputContainer>
      <StyledLabel>
        {label}
        {required && <StyledRequired>*</StyledRequired>}
      </StyledLabel>
      {options.map((option, index) => (
        <StyledRadioGroup key={index}>
          <StyledRadioInput
            type='radio'
            id={option}
            name={name}
            value={option}
          />
          <StyledLabel htmlFor={option}>{option}</StyledLabel>
        </StyledRadioGroup>
      ))}
    </StyledInputContainer>
  );
};

export { Input, TextAreaInput, SelectInput, RadioInput };
