import React from 'react';
import { StyledPhotoContainer, StyledPhotoFilter } from './style';

const PhotoFilter = ({ children }) => {
  return (
    <StyledPhotoContainer>
      <StyledPhotoFilter />
      {children}
    </StyledPhotoContainer>
  );
};

export { PhotoFilter };
