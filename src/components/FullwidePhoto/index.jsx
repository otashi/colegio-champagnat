import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledFullwidePhotoContainer, StyledFullwidePhoto } from './style';

const FullwidePhoto = ({ coverURL, children }) => {
  return (
    <StyledFullwidePhotoContainer>
      <PhotoFilter />
      <StyledFullwidePhoto src={coverURL} />
      {children}
    </StyledFullwidePhotoContainer>
  );
};

export { FullwidePhoto };
