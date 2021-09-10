import React from 'react';
import { StyledButton } from './style';

const Button = ({ label, handleClick }) => {
  return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

export { Button };
