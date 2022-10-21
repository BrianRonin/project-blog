import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { postGridProps } from './post_grid'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div<postGridProps>`
  ${({ theme }) => css`
    max-width: ${theme.sizes.max};
    width: 100%;
  `}
`

export const Grid = styled.div<postGridProps>`
  ${({ theme }) => css`
    max-width: max-content;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(
      auto-fill,
      minmax(28rem, 1fr)
    );
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.large};
    @media ${theme.media.small} {
      grid-template-columns: 1fr;
    }
  `}
`

export const NotFound = styled.h1<postGridProps>`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
  `}
`
