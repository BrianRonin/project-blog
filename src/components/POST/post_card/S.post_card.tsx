import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { Title as Heading } from '../../Heading/styles'
import { postCardProps } from './post_card'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css`
    ${Heading} {
      margin: 0;
      margin-top: calc(
        ${theme.spacings.small} - 6px
      );
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      opacity: 0.8;
    }
  `}
`

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    transition: opacity 300ms ease-in-out;
  `}
`

export const Excerpt = styled.p`
  ${({ theme }) => css``}
`
