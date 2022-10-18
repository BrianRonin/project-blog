import styled, { css, DefaultTheme } from 'styled-components'
import { containerPostProps } from './container_post'

const containerStyle = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.content};
  `,
}

export const Main = styled.div<containerPostProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    ${containerStyle[size](theme)}

    @media ${theme.media.medium} {
      padding: 0;
    }
  `}
`
