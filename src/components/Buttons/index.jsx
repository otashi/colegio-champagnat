import React from 'react';
import { Anchor } from '../Anchor';
import { StyledButton } from './style';

const Button = ({ label, handleClick, type, href }) => {
  if (type === 'Anchor') {
    return (
      <StyledButton>
        <Anchor href={href}>{label}</Anchor>
      </StyledButton>
    );
  } else {
    return <StyledButton onClick={handleClick}>{label}</StyledButton>;
  }
};

export { Button };
