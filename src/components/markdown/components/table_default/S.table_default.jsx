import styled, { css } from 'styled-components'

const name = (theme) => css`
  //
`

export const Main = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid
        ${theme.colors.mediumGray};
    }
  `}
`
