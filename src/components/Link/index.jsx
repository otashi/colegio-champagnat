import React from 'react';
import { StyledLink } from './style';

const Link = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export { Link };
