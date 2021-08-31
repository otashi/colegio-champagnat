import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledCardPhotoContainer, StyledCardPhoto } from './style';

const CardPhoto = ({ path }) => {
  return (
    <StyledCardPhotoContainer>
      <PhotoFilter />
      <StyledCardPhoto src={path} />
    </StyledCardPhotoContainer>
  );
};

export { CardPhoto };
