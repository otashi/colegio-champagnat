import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledCardPhotoContainer, StyledCardPhoto } from './style';

const CardPhoto = ({ coverURL, setPhotoFilter, setContain }) => {
  return (
    <StyledCardPhotoContainer>
      {setPhotoFilter && <PhotoFilter />}
      <StyledCardPhoto src={coverURL} contain={setContain} />
    </StyledCardPhotoContainer>
  );
};

export { CardPhoto };
