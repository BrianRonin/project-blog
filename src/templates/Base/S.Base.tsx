import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { baseProps } from './Base'
type S_baseProps = baseProps

export const Main = styled.div`
  ${({ theme }) => css``}
`

export const Header = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xhuge};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`
