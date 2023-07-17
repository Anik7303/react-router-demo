import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: #111;
    background: #f0f0f0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    overflow-y: visible;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
