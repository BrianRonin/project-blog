import styled, { css } from 'styled-components'
export const Main = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: block;
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.primary};

    &:hover {
      color: ${theme.colors.secondary};
      border-right-color: ${theme.colors.secondary};
    }
  `}
`
