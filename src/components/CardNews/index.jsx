import React from 'react';
import { CardPhoto } from '../CardPhoto';
import {
  StyledCardNewsContainer,
  StyledCardNewsData,
  StyledCardNewsContent,
  StyledCardNewsCategory,
  StyledCardNewsTitle,
  StyledCardNewsText,
  StyledCardNewsPublishedTime,
} from './style';

const CardNews = ({ title, category, coverURL, content = '', time }) => {
  const textToRender = () => {
    const textArray = content.split(' ');
    if (textArray.length <= 25) {
      return content;
    } else {
      return `${textArray.splice(0, 25).join(' ')}...`;
    }
  };

  return (
    <StyledCardNewsContainer>
      <CardPhoto coverURL={coverURL} />
      <StyledCardNewsData>
        <StyledCardNewsContent>
          <StyledCardNewsCategory>{category.category}</StyledCardNewsCategory>
          <StyledCardNewsTitle>{title}</StyledCardNewsTitle>
          <StyledCardNewsText>{textToRender()}</StyledCardNewsText>
        </StyledCardNewsContent>
        <StyledCardNewsPublishedTime>
          Publicado hace {time}
        </StyledCardNewsPublishedTime>
      </StyledCardNewsData>
    </StyledCardNewsContainer>
  );
};

export { CardNews };
