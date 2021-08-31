import React from 'react';
import {
  StyledCardNewsBriefContainer,
  StyledCardNewsBriefData,
  StyledCardNewsBriefCategory,
  StyledCardNewsBriefTitle,
} from './style';
import { CardPhoto } from '../CardPhoto';

const CardNewsBrief = ({ title, category, photo }) => {
  return (
    <StyledCardNewsBriefContainer>
      <CardPhoto path={photo} />
      <StyledCardNewsBriefData>
        <StyledCardNewsBriefCategory>{category}</StyledCardNewsBriefCategory>
        <StyledCardNewsBriefTitle>{title}</StyledCardNewsBriefTitle>
      </StyledCardNewsBriefData>
    </StyledCardNewsBriefContainer>
  );
};

export { CardNewsBrief };
