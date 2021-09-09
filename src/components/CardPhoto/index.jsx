import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledCardPhotoContainer, StyledCardPhoto } from './style';

const CardPhoto = ({ coverURL }) => {
  return (
    <StyledCardPhotoContainer>
      <PhotoFilter />
      <StyledCardPhoto src={coverURL} />
    </StyledCardPhotoContainer>
  );
};

export { CardPhoto };
