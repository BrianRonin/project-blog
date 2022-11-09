import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { buttonProps } from './button'
// type S_buttonProps = Exclude<
//   Pick<buttonProps, 'children'>,
//   buttonProps
// >

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.xlarge};
    @media ${theme.media.medium} {
      font-size: ${theme.sizes.large};
    }
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.xhuge};
    @media ${theme.media.medium} {
      font-size: ${theme.sizes.xlarge};
    }
  `,
}

export const Main = styled.a<
  Pick<buttonProps, 'size'>
>`
  ${({ theme, size }) => css`
    button {
      background-color: black;
      color: ${theme.colors.white};
      ${!!size && sizes[size](theme)};
      padding: 3px ${theme.spacings.large};
      background: ${theme.colors.primary};
      color: ${theme.colors.white}
      border: none;
      padding: ${theme.spacings.small} ${
    theme.spacings.large
  };
      cursor: pointer;
      :disabled {
        background: ${theme.colors.darkGray};
      }
    }
  `}
`
