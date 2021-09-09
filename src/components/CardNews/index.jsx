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

const CardNews = ({ title, category, photo, text = '', time }) => {
  const textToRender = () => {
    const textArray = text.split(' ');
    if (textArray.length <= 25) {
      return text;
    } else {
      return `${textArray.splice(0, 25).join(' ')}...`;
    }
  };

  return (
    <StyledCardNewsContainer>
      <CardPhoto coverURL={photo} />
      <StyledCardNewsData>
        <StyledCardNewsContent>
          <StyledCardNewsCategory>{category}</StyledCardNewsCategory>
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
