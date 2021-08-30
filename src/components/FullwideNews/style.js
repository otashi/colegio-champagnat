import styled from 'styled-components';

const StyledFullwideNewsData = styled.div`
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;
`;

const StyledFullwideNewsTitle = styled.h2`
  color: var(--n10);
  font-size: 3.2rem;
  font-weight: normal;
  line-height: 4rem;

  @media screen and (min-width: 1024px) {
    font-size: 4rem;
    line-height: 5.2rem;
  }
`;

const StyledFullwideNewsCategory = styled.h3`
  color: var(--n30);
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 2.8rem;

  @media screen and (min-width: 1024px) {
    font-size: 2.8rem;
    line-height: 4rem;
  }
`;

export {
  StyledFullwideNewsData,
  StyledFullwideNewsTitle,
  StyledFullwideNewsCategory,
};
