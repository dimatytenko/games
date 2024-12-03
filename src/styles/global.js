import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    border: 0px;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  :focus,
  :active {
    outline: none;
  }
  a:focus,
  a:active {
    outline: none;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
  
  body {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  background-color: #ffffff;
  }
  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul li {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
`;
