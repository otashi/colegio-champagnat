import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledFullwidePhotoContainer, StyledFullwidePhoto } from './style';

const FullwidePhoto = ({ coverURL, setPhotoFilter, setContain, children }) => {
  return (
    <StyledFullwidePhotoContainer>
      {setPhotoFilter && <PhotoFilter />}
      <StyledFullwidePhoto src={coverURL} contain={setContain} />
      {children}
    </StyledFullwidePhotoContainer>
  );
};

export { FullwidePhoto };
