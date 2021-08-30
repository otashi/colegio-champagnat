import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledFullwidePhotoContainer, StyledFullwidePhoto } from './style';

const FullwidePhoto = ({ path, children }) => {
  return (
    <StyledFullwidePhotoContainer>
      <PhotoFilter />
      <StyledFullwidePhoto src={path} />
      {children}
    </StyledFullwidePhotoContainer>
  );
};

export { FullwidePhoto };
