import React from 'react';
import { PhotoFilter } from '../PhotoFilter';
import { StyledFullwidePhotoContainer, StyledFullwidePhoto } from './style';

const FullwidePhoto = ({ coverURL, setPhotoFilter, children }) => {
  return (
    <StyledFullwidePhotoContainer>
      {setPhotoFilter && <PhotoFilter />} 
      <StyledFullwidePhoto src={coverURL} />
      {children}
    </StyledFullwidePhotoContainer>
  );
};

export { FullwidePhoto };
