import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input {
    border: none;
    background-color: inherit;
    &:focus {
      border: none;
    }
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
  }
  html {
    width: 100vw;
}

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background}
  }
`;

export default GlobalStyle;
