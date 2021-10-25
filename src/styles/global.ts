import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }
  
  @media(max-width: 1080px){
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media(max-width: 720px){
    html {
      font-size: 87.5%; // 14px
    }
  }

  body, input, button {
    background-color: ${props => props.theme.colors.backgroud};
    font: 500 1rem sans-serif;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }

  h1, h2, h3, h4 {
    font-weight: 500;
  }
`