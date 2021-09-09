import React from 'react';
import { FullwidePhoto } from '../FullwidePhoto';
import {
  StyledFullwideNewsData,
  StyledFullwideNewsTitle,
  StyledFullwideNewsCategory,
} from './style';

const FullwideNews = ({ title, category, photo }) => {
  return (
    <FullwidePhoto coverURL={photo}>
      <StyledFullwideNewsData>
        <StyledFullwideNewsTitle>{title}</StyledFullwideNewsTitle>
        <StyledFullwideNewsCategory>{category}</StyledFullwideNewsCategory>
      </StyledFullwideNewsData>
    </FullwidePhoto>
  );
};

export { FullwideNews };
