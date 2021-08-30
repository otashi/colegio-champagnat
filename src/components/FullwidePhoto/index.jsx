import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledFullwidePhotoContainer, StyledFullwidePhoto } from './style';

const FullwidePhoto = ({ path }) => {
  return (
    <StyledFullwidePhotoContainer>
      <PhotoFilter />
      <StyledFullwidePhoto src={path} />
    </StyledFullwidePhotoContainer>
  );
};

export { FullwidePhoto };
