import * as S from './S.cover_with_meta'
import {
  ArticleMeta,
  articleMetaProps,
} from '../article_meta/article_meta'

import { type_strapi_img } from '../../../types/strapi/image'

export type coverWithMetaProps = {
  articleMetaProps: articleMetaProps
  coverWithMeta: type_strapi_img
}

export const CoverWithMeta = ({
  articleMetaProps,
  coverWithMeta,
}: coverWithMetaProps) => {
  return (
    <S.Main>
      <div>
        <S.Img
          src={coverWithMeta?.url}
          alt={coverWithMeta?.alternativeText}
        />
        <em>
          <ArticleMeta {...articleMetaProps} />
        </em>
      </div>
    </S.Main>
  )
}
