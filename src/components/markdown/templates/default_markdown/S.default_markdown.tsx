import styled, { css, DefaultTheme } from 'styled-components'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};

    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    blockquote {
      border-left: 5px solid ${theme.colors.mediumGray};
      color: ${theme.colors.darkGray};
      filter: brightness(%80);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      background: #282a36;
      padding: ${theme.spacings.medium};
      font-family: monospace;
      margin: ${theme.spacings.xlarge} 0;
      width: 100%;
      overflow-x: auto;
    }

    img {
      max-width: 100%;
      line-height: 0;
    }

    .img-container {
      img {
        width: 100%;
      }
    }

    ul,
    ol {
      margin: ${theme.spacings.xlarge};
    }

    hr {
      border: none;
      border-bottom: 1px solid ${theme.colors.mediumGray};
    }

    @media ${theme.media.medium} {
      font-size: calc(${theme.fonts.sizes.small} + 0.5rem);
    }
  `}
`
