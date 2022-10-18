import {
  createGlobalStyle,
  css,
} from 'styled-components'
/*
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Silkscreen', cursive;
*/

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.family.default};
  color: ${({ theme }) => theme.colors.darkText}
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) =>
    theme.fonts.family.default};
  margin: ${({ theme }) =>
    theme.spacings.large} 0;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary}
}

/* p {
  margin: ${({ theme }) =>
    theme.spacings.large} 0;
}

ul, ol {
  margin: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) =>
    theme.spacings.medium};
}

a {
  color: ${({ theme }) => theme.colors.secondary}
}

table {
  width: 100%;
  overflow-y: auto;
}

code, pre {
  width: 100vw;
} */
`
