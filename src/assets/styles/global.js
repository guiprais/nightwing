import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.darkBackground};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
