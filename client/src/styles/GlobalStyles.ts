import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.body};
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    transition: background 0.2s linear;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.title};
  }
  h1 {
    font-size: 40px;
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: -20px;
    letter-spacing: 8px;
    text-transform: uppercase;
  }
`;