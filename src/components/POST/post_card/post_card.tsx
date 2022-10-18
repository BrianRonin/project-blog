import Link from 'next/link'
import { articleHeaderProps } from '../../ARTICLE/article_header/article_header'
import { Heading } from '../../Heading'
import { postProps } from '../post/post'
import * as S from './S.post_card'

export type postCardProps = {
  slug: string
} & articleHeaderProps

export const PostCard = ({
  coverWithMetaProps,
  excerpt,
  title,
  slug,
}: postCardProps) => {
  return (
    <S.Main>
      <Link href={`/post/${slug}`}>
        <a>
          <S.Cover
            src={
              coverWithMetaProps.coverWithMeta.url
            }
            alt={
              coverWithMetaProps.coverWithMeta
                .altText
            }
          ></S.Cover>
        </a>
      </Link>
      <Heading as='h2' size='small'>
        <Link href={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>
      <S.Excerpt>{excerpt}</S.Excerpt>
    </S.Main>
  )
}
