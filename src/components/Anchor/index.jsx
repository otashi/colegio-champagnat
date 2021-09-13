import React from 'react';
import { StyledAnchor } from './style';

const Anchor = ({ children, href }) => {
  return (
    <StyledAnchor href={href} target='_blank'>
      {children}
    </StyledAnchor>
  );
};

export { Anchor };
