import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { commentsDisqusProps } from './comments_disqus'

export const Main = styled.div`
  ${({ theme }) => css`
    iframe[src*='ads'] {
      display: nonw;
    }

    background-color: #000000;
    border-radius: 10%;
    max-width: ${theme.sizes.content};
    width: 100%;
    margin: ${theme.spacings.large} auto;
    padding: 0 ${theme.spacings.large};
  `}
`
