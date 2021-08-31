import React from 'react';
import { CardNewsBrief } from '../CardNewsBrief';
import { StyledCarousel } from './style';

const Carousel = ({ news }) => {
  return (
    <StyledCarousel>
      {news.map((item) => (
        <CardNewsBrief {...item} />
      ))}
    </StyledCarousel>
  );
};

export { Carousel };
