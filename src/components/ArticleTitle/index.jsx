import React from 'react';
import {
  StyledArticleData,
  StyledArticleCategory,
  StyledArticleTitle,
  StyledArticlePublishedTime,
} from './style';

const ArticleTitle = ({ title, category, time }) => {
  return (
    <StyledArticleData>
      <StyledArticleCategory>{category}</StyledArticleCategory>
      <StyledArticleTitle>{title}</StyledArticleTitle>
      <StyledArticlePublishedTime>
        Publicado hace {time}
      </StyledArticlePublishedTime>
    </StyledArticleData>
  );
};

export { ArticleTitle };
