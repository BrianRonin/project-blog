import {
  ArticleMeta,
  articleMetaProps,
} from '../article_meta/article_meta'
import {
  CoverWithMeta,
  coverWithMetaProps,
} from '../cover_with_meta/cover_with_meta'
import * as S from './S.article_header'
import {
  Heading,
  HeadingProps,
} from '../../Heading/index'
import { Header } from '../../header/header'
import { headerProps } from '../../header/header'

export type articleHeaderProps = {
  title: string
  excerpt: string
  coverWithMetaProps: coverWithMetaProps
}

export const ArticleHeader = ({
  coverWithMetaProps,
  excerpt,
  title,
}: articleHeaderProps) => {
  return (
    <S.Main>
      <Heading size='big'>{title}</Heading>
      <S.Excerpt>{excerpt}</S.Excerpt>
      <CoverWithMeta {...coverWithMetaProps} />
    </S.Main>
  )
}
