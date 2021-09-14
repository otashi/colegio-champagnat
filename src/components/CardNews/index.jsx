import React from 'react';
import { CardPhoto } from '../CardPhoto';
import { Link } from '../Link';
import {
  StyledCardNewsContainer,
  StyledCardNewsData,
  StyledCardNewsContent,
  StyledCardNewsCategory,
  StyledCardNewsTitle,
  StyledCardNewsText,
  StyledCardNewsPublishedTime,
} from './style';
import { publishedAgo } from '../../utils/publishedAgo';
import { textToRenderInCard } from '../../utils/textToRenderInCard';

const CardNews = ({
  title,
  category,
  coverURL,
  content = '',
  published_at,
  setPhotoFilter,
  setContain,
  id,
}) => {
  return (
    <Link to={`/articulo/${id}`}>
      <StyledCardNewsContainer>
        <CardPhoto
          coverURL={coverURL}
          setPhotoFilter={setPhotoFilter}
          setContain={setContain}
        />
        <StyledCardNewsData>
          <StyledCardNewsContent>
            <StyledCardNewsCategory>{category.category}</StyledCardNewsCategory>
            <StyledCardNewsTitle>{title}</StyledCardNewsTitle>
            <StyledCardNewsText>
              {textToRenderInCard(content)}
            </StyledCardNewsText>
          </StyledCardNewsContent>
          <StyledCardNewsPublishedTime>
            Publicado el {publishedAgo(published_at)}
          </StyledCardNewsPublishedTime>
        </StyledCardNewsData>
      </StyledCardNewsContainer>
    </Link>
  );
};

export { CardNews };
