import React from 'react';
import { CardNewsBrief } from '../CardNewsBrief';
import { StyledCarousel } from './style';

const Carousel = ({ news = [] }) => {
  return (
    <StyledCarousel>
      {news.map((article) => (
        <CardNewsBrief {...article} key={article.id} />
      ))}
    </StyledCarousel>
  );
};

export { Carousel };
