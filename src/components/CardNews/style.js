import styled from 'styled-components';

const StyledCardNewsContainer = styled.div`
  display: grid;
  grid-template-columns: 14rem 183px;
  column-gap: 1.6rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 20rem 265px;
  }
`;

const StyledCardNewsData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardNewsContent = styled.div``;

const StyledCardNewsCategory = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.6rem;
  color: var(--n200);

  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

const StyledCardNewsTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 2rem;

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const StyledCardNewsText = styled.p`
  font-size: 1.1rem;
  line-height: 1.4rem;

  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const StyledCardNewsPublishedTime = styled(StyledCardNewsText)`
  color: var(--n100);
`;

export {
  StyledCardNewsContainer,
  StyledCardNewsData,
  StyledCardNewsContent,
  StyledCardNewsCategory,
  StyledCardNewsTitle,
  StyledCardNewsText,
  StyledCardNewsPublishedTime,
};
