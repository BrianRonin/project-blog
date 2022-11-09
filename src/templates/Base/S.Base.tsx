import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
export const Main = styled.div`
  ${({ theme }) => css`
    padding-left: 2.4rem;
    padding-right: 1rem;
    @media ${theme.media.medium} {
      padding-left: 10px;
      padding-right: 10px;
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    margin-top: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Search = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.small};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-left: min(5rem, auto);
    margin-bottom: ${theme.spacings.large};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    border-top: 0.1rem solid
      ${theme.colors.mediumGray};

    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`
