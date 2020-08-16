import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: .9rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  span, p, h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }
`

export default GlobalStyles
