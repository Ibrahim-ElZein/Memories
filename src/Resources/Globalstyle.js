import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-url: url(${({ theme }) => theme.backgroundUrl })),;
    background-size: cover;
    transition: all 0.50s linear;
  }
  `
