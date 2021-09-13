import React from 'react';
import {
  StyledCardNewsBriefContainer,
  StyledCardNewsBriefData,
  StyledCardNewsBriefCategory,
  StyledCardNewsBriefTitle,
} from './style';
import { CardPhoto } from '../CardPhoto';

const CardNewsBrief = ({ title, category, coverURL }) => {
  return (
    <StyledCardNewsBriefContainer>
      <CardPhoto coverURL={coverURL} />
      <StyledCardNewsBriefData>
        <StyledCardNewsBriefCategory>
          {category.category}
        </StyledCardNewsBriefCategory>
        <StyledCardNewsBriefTitle>{title}</StyledCardNewsBriefTitle>
      </StyledCardNewsBriefData>
    </StyledCardNewsBriefContainer>
  );
};

export { CardNewsBrief };
