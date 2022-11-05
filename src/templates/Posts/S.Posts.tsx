import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { baseProps_template } from '../Base/Base'

import { postsProps_template } from './Posts'
type S_postsProps = Exclude<
  {
    children: React.ReactNode
    BaseProps: baseProps_template
  },
  postsProps_template
>

export const Main = styled.div`
  ${({ theme }) => css`
    //
  `}
`
