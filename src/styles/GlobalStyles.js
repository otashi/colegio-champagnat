import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --b400: #0052cc;
    --n0: #ffffff;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  * {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  p,
  a,
  span,
  li {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`;

export { GlobalStyles };
