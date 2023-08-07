import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};;
  }

  body {
    background-color:${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['brown-900']};
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    border: none;
  }

  img {
    max-width: 100%;
  }
`
