import styled, { css, DefaultTheme } from 'styled-components'
import { Title as heading } from '../../../components/Heading/styles'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${heading} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
    @media ${theme.media.medium} {
      font-size: ${theme.spacings.small};
    }
  `}
`
