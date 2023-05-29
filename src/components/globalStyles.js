import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: -20px 0 0 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  button {
    font-size: 23px;
    border: 0;
  }
  
  button:hover {
    transform: scale(1.07) perspective(1px);
    cursor: pointer;
  }
  
  h1, h2 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
  }
  
  h1 {
    margin-bottom: 0;
    font-size: 65px;
  }
  
  h2 {
    font-size: 80px;
    margin-bottom: 60px;
    margin-top: 0;
  }

  @media only screen and (max-width: 650px) {
    h1 {
      margin-bottom: 0;
      margin-top: -20px;
      font-size: 65px;
    }
  }
`;
 
export default GlobalStyle;
