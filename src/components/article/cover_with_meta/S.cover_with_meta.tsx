import styled, {
  css,
  DefaultTheme,
} from 'styled-components'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css``}
`
export const Img = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.sizes.max};
    margin-bottom: ${theme.spacings.medium};
  `}
`
