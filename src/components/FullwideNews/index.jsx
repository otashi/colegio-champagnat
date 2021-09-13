import React from 'react';
import { FullwidePhoto } from '../FullwidePhoto';
import { Link } from '../Link';
import {
  StyledFullwideNewsData,
  StyledFullwideNewsTitle,
  StyledFullwideNewsCategory,
} from './style';

const FullwideNews = ({ news }) => {
  if (news.length >= 1) {
    return (
      <Link to='/'>
        <FullwidePhoto coverURL={news[0].coverURL}>
          <StyledFullwideNewsData>
            <StyledFullwideNewsTitle>{news[0].title}</StyledFullwideNewsTitle>
            <StyledFullwideNewsCategory>
              {news[0].category.category}
            </StyledFullwideNewsCategory>
          </StyledFullwideNewsData>
        </FullwidePhoto>
      </Link>
    );
  } else {
    return <></>;
  }
};

export { FullwideNews };
