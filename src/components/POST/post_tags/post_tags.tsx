import Link from 'next/link'
import { type_strapi_tags } from '~/types/strapi/tags'
import * as S from './S.post_tags'

export type postTagsProps = {
  tags?: type_strapi_tags[]
}

export const PostTags = ({
  tags,
}: postTagsProps) => {
  if (tags?.length === 0) {
    return null
  }
  return (
    <S.Main>
      tags:
      {tags?.map((tag, index) => (
        <span key={`tag_reac_id_${index}`}>
          <Link href={`/tag/${tag.slug}`}>
            <a href=''>{tag.name}</a>
          </Link>
        </span>
      ))}
    </S.Main>
  )
}
