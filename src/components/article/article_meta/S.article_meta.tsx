import styled, { css, DefaultTheme } from 'styled-components'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.darkGray};
    font-style: italic;

    .tags span::after {
      content: ', ';
    }

    .tags span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300msa ease-in-out;
      &:hover {
        filter: brightness(50%);
      }
    }

    @media ${theme.media.medium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    //
  `}
`
