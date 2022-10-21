import * as S from './S.post_tags'

export type postTagsProps = {
  children?: React.ReactNode
}

export const PostTags = ({ children }: postTagsProps) => {
  return <S.Main>{children}</S.Main>
}
