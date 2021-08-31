import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledCardPhotoContainer, StyledCardPhoto } from './style';

const CardPhoto = ({ path, children }) => {
  return (
    <StyledCardPhotoContainer>
      <PhotoFilter />
      <StyledCardPhoto src={path} />
      {children}
    </StyledCardPhotoContainer>
  );
};

export { CardPhoto };
