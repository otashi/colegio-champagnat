import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledCardPhotoContainer, StyledCardPhoto } from './style';

const CardPhoto = ({ coverURL, setPhotoFilter }) => {
  return (
    <StyledCardPhotoContainer>
      {setPhotoFilter && <PhotoFilter />}
      <StyledCardPhoto src={coverURL} />
    </StyledCardPhotoContainer>
  );
};

export { CardPhoto };
