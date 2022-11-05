import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { postGridProps } from './post_grid'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large}, 0;
    display: flex;
    justify-content: center;
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    max-width: 150rem;
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

export const NotFound = styled.h1`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
  `}
`
