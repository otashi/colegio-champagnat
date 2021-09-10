import styled from 'styled-components';

const StyledMarkdown = styled.div`
  color: var(--n900);

  h1 {
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: normal;
    margin: 0.8rem 0;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2rem;
    margin: 1.6rem 0 0.8rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.6rem;
    margin: 1.6rem 0 0.8rem;
  }

  p {
    margin: 0.8rem 0;
  }

  a {
    color: var(--b400);
  }

  ol,
  ul {
    padding-left: 1.6rem;
  }

  blockquote {
    margin: 1.6rem 0;
    border-left: 0.8rem solid var(--n900);
    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
    border-radius: 0.4rem;
    background-color: var(--n100);
    color: var(--n0);
    font-style: italic;
  }
`;

export { StyledMarkdown };
