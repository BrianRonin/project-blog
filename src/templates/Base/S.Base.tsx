import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
export const Main = styled.div`
  ${({ theme }) => css`
    padding-left: 5rem;
    @media ${theme.media.medium} {
      padding-left: 1rem;
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-left: min(5rem, auto);
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
