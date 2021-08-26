import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --b400: #0052cc;
    --b500: #0747A6;
    --n0: #ffffff;
    --n10: #FAFBFC;
    --n900: #091E42;
    --n50a: rgba(9,30,66,0.25);
    --n60a: rgba(9,30,66,0.31);
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

  i {
    font-size: 3rem;
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
