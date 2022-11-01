import styled, {
  css,
  DefaultTheme,
} from 'styled-components'
import { postTagsProps } from './post_tags'
type S_postTagsProps = postTagsProps

export const Main = styled.p<S_postTagsProps>`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium};

    span {
      margin: 0 0 0 0.5rem;
    }

    span::after {
      content: ', ';
    }

    span::before {
      content: ' ';
    }

    span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`
