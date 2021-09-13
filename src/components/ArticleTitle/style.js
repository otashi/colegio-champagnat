import styled from 'styled-components';

const StyledArticleData = styled.div`
  display: grid;
  row-gap: 0.8rem;
`;

const StyledArticleCategory = styled.h2`
  color: var(--n100);
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2rem;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const StyledArticleTitle = styled.h1`
  color: var(--n900);
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: normal;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;

const StyledArticlePublishedTime = styled.p`
  color: var(--n100);
  font-size: 1.1rem;
  line-height: 1.4rem;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export {
  StyledArticleData,
  StyledArticleCategory,
  StyledArticleTitle,
  StyledArticlePublishedTime,
};
