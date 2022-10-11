import { Text } from '../Text'
import * as S from './S.article_meta'
import { formatDate } from '../../utils/format-date'
// data autor tags
export type articleMetaProps = {
  createdAt: string
  author: { slug: string; name: string }
  tags: { name: string; slug: string }[]
  category: { name: string; slug: string }
}
export const ArticleMeta = ({
  createdAt,
  author,
  tags,
  category,
}: articleMetaProps) => {
  return (
    <S.Main className='id-component-article-meta'>
      <S.Span>
        <p>
          Por{' '}
          <a href={'/author/' + author.slug}>
            <strong>{author.name}</strong>
          </a>{' '}
          em <time dateTime={createdAt}>{formatDate(createdAt)}, </time>
          {!!category && (
            <a href={`/category/${category.slug}`}>
              <strong>{category.name + ', '}</strong>
            </a>
          )}
          <span className='tags'>
            {!!tags &&
              tags.map((tag, index) => (
                <span key={`tag-blog-id-${index}`}>
                  <a href={`/tags/${tag.slug}`}>{tag.name}</a>
                </span>
              ))}
          </span>
        </p>
      </S.Span>
    </S.Main>
  )
}
