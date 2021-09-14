import React from 'react';
import { publishedAgo } from '../../utils/publishedAgo';
import {
  StyledArticleData,
  StyledArticleCategory,
  StyledArticleTitle,
  StyledArticlePublishedTime,
} from './style';

const ArticleTitle = ({ title, category, published_at }) => {
  return (
    <StyledArticleData>
      <StyledArticleCategory>{category}</StyledArticleCategory>
      <StyledArticleTitle>{title}</StyledArticleTitle>
      <StyledArticlePublishedTime>
        Publicado el {publishedAgo(published_at)}
      </StyledArticlePublishedTime>
    </StyledArticleData>
  );
};

export { ArticleTitle };
