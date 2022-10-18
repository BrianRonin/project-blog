import * as S from './S.post_grid'

export type postGridProps = {
  children?: React.ReactNode
}

export const PostGrid = ({ children }: postGridProps) => {
  return <S.Main>{children}</S.Main>
}
