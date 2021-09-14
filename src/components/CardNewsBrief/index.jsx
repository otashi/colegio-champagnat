import React from 'react';
import {
  StyledCardNewsBriefContainer,
  StyledCardNewsBriefData,
  StyledCardNewsBriefCategory,
  StyledCardNewsBriefTitle,
} from './style';
import { CardPhoto } from '../CardPhoto';
import { Link } from '../Link';

const CardNewsBrief = ({
  title,
  category,
  coverURL,
  setPhotoFilter,
  setContain,
  id,
}) => {
  return (
    <Link to={`/articulo/${id}`}>
      <StyledCardNewsBriefContainer>
        <CardPhoto
          coverURL={coverURL}
          setPhotoFilter={setPhotoFilter}
          setContain={setContain}
        />
        <StyledCardNewsBriefData>
          <StyledCardNewsBriefCategory>
            {category.category}
          </StyledCardNewsBriefCategory>
          <StyledCardNewsBriefTitle>{title}</StyledCardNewsBriefTitle>
        </StyledCardNewsBriefData>
      </StyledCardNewsBriefContainer>
    </Link>
  );
};

export { CardNewsBrief };
