import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { Title } from '../Heading/styles'

const name = (theme: DefaultTheme) => css`
  //
`

export const Main = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.sizes.max};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.darkText};
    margin: 0 auto;
    font-size: ${theme.fonts.sizes.small};

    ${Title} {
      margin: 0 0
        calc(${theme.spacings.small} - 1rem);
    }

    @media ${theme.media.medium} {
      img {
        display: block;
      }
      p {
        font-size: ${theme.fonts.sizes.small};
      }

      h1 {
        font-size: ${theme.fonts.sizes.medium};
      }

      .header-text-container {
        padding-left: 4px;
      }

      display: flex;
      flex-flow: column wrap;
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    margin-left: 0;
    max-width: 48rem;
  `}
`
