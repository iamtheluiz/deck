import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    outline: 0;
    outline-color: transparent;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #FFFFFF30;
  }

  html, body {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
`
