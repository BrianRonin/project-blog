import styled, { css } from 'styled-components'
import { Main as Text } from '../Text/styles'

export const Main = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    background-color: white;
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }

    & ${Text} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`
