import * as S from './styles'
import { Text } from '../Text'

export type footerProps = {
  children: string
  background?: boolean
}

export const Footer = ({ children, background = false }: footerProps) => {
  return (
    <S.Main>
      <Text>{children}</Text>
    </S.Main>
  )
}
