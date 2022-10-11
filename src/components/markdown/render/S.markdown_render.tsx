import styled, { css, DefaultTheme } from 'styled-components'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    max-width: 100vw;
    margin: 0 4rem;
    overflow-x: auto !important;
    p {
      margin: ${theme.spacings.xlarge} 0;
      display: inline;
      white-space: pre-line;
    }

    img {
      max-width: 100%;
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

    table {
      white-space: nowrap;
      max-width: 100%;

      border-collapse: collapse;
    }

    table td,
    table th {
      overflow-x: auto;
      max-width: 100vw;
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};

      ::before {
        content: <div>;
        overflow-x: auto;
      }
    }

    @media ${theme.media.medium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`
export const Table = styled.div`
  ${({ theme }) => css`
    background: black;
  `}
`
