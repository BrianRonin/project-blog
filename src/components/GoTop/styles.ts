import styled, { css, DefaultTheme } from 'styled-components'

const Light = (theme: DefaultTheme) => css`
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
`
type background = {
  background: boolean
}

export const Main = styled.a<background>`
  ${({ theme, background }) => css`
    position: fixed;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    right: 2rem;
    bottom: 2rem;
    z-index: 6;
    opacity: 0.8;
    border-radius: 50%;
    ${background && Light(theme)};
  `}
`
