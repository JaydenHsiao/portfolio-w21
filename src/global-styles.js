// import React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  body {
    box-sizing: border-box;
    font-family: 'Lato', serif;
    /* font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    background: var(--color-background);
    color: var(--color-text);
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.07rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03rem;
  }

  p {
    line-height: 1.35;
    letter-spacing: -0.01rem;
  }

  /* a {
    color: var(--color-secondary);
  } */
`;

export default GlobalStyles;
