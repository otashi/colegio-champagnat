import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --r400: #DE350B;
    --b400: #0052cc;
    --b500: #0747A6;
    --n0: #ffffff;
    --n10: #FAFBFC;
    --n30: #ebecf0;
    --n40: #DFE1E6;
    --n100: #7A869A;
    --n200: #6B778C;
    --n900: #091E42;
    --n50a: rgba(9,30,66,0.25);
    --n60a: rgba(9,30,66,0.31);
    --n70a: rgba(9,30,66,0.36);
    --n800a: rgba(9,30,66,0.95);
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
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    padding-top: 5.5rem;
    -webkit-font-smoothing: antialiased;
  }
`;

export { GlobalStyles };
