import styled, { css, DefaultTheme } from 'styled-components'
import { children } from '../../types/children'
import { aTest68Props } from './a_test68'

type S_aTest68Props = Exclude<Pick<aTest68Props, 'children'>, aTest68Props>

export const Main = styled.div<S_aTest68Props>`
  ${({ theme }) => css`
    //
  `}
`
