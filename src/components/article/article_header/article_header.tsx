import { ArticleMeta, articleMetaProps } from '../article_meta/article_meta'
import { Cover, coverProps } from '../cover/cover'
import * as S from './S.article_header'
import { Heading, HeadingProps } from '../../Heading/index'
import { Header } from '../../header/header'
import { headerProps } from '../../header/header'

export type articleHeaderProps = {
  title: string
  excerpt: string
  coverProps: coverProps
}

export const ArticleHeader = ({
  coverProps,
  excerpt,
  title,
}: articleHeaderProps) => {
  return (
    <S.Main>
      <Heading size='big'>{title}</Heading>
      <S.Excerpt>{excerpt}</S.Excerpt>
      <Cover {...coverProps} />
    </S.Main>
  )
}
