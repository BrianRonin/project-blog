import styled, { css } from 'styled-components'
import { Main as Text } from '../Text/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
    background-color: ${theme.colors.white};
    a {
      color: ${theme.colors.darkText};
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }

    & ${Text} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`
