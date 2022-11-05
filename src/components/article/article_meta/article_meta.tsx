import * as S from './S.article_meta'
import { formatDate } from '../../../utils/format-date'
import { type_strapi_author } from '../../../types/strapi/author'
import { type_strapi_category } from '../../../types/strapi/category'
import { type_strapi_tags } from '../../../types/strapi/tags'
import Link from 'next/link'

export type articleMetaProps = {
  createdAt: string
  author?: type_strapi_author
  tags?: type_strapi_tags[]
  category?: type_strapi_category
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
          {!!author && (
            <>
              <Link
                href={'/author/' + author.slug}
              >
                <>
                  <a>
                    <strong>{author.name}</strong>
                  </a>{' '}
                </>
              </Link>
            </>
          )}
          {!author && <strong>anônimo </strong>}
          <time dateTime={createdAt}>
            {formatDate(createdAt)},{' '}
          </time>
          {!!category && (
            <Link
              href={`/category/${category.slug}`}
            >
              <a>
                <strong>
                  {category.name + ', '}
                </strong>
              </a>
            </Link>
          )}
          {!!tags && (
            <span className='tags'>
              {!!tags &&
                tags.map((tag, index) => (
                  <span
                    key={`tag-blog-id-${index}`}
                  >
                    <Link
                      href={`/tags/${tag.slug}`}
                    >
                      <a>{tag.name}</a>
                    </Link>
                  </span>
                ))}
            </span>
          )}
        </p>
      </S.Span>
    </S.Main>
  )
}
