import styled, { css, DefaultTheme } from 'styled-components'
import { postGridProps } from './post_grid'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.h1<postGridProps>`
  ${({ theme }) => css`
    //
  `}
`
