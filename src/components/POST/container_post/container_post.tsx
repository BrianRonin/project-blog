import * as S from './S.container_post'

export type containerPostProps = {
  children?: React.ReactNode
  size: 'max' | 'content'
}

export const ContainerPost = ({ children, size }: containerPostProps) => {
  return <S.Main size={size}>{children}</S.Main>
}
