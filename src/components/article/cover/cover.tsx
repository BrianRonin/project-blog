import * as S from './S.cover'
import { ArticleMeta, articleMetaProps } from '../article_meta/article_meta'

import { type_strapi_img } from '../../../types/strapi/image'

export type coverProps = {
  articleMetaProps: articleMetaProps
  cover: type_strapi_img
}

export const Cover = ({ articleMetaProps, cover }: coverProps) => {
  return (
    <S.Main>
      <div>
        <S.Img src={cover.url} alt={cover.altText} />
        <em>
          <ArticleMeta {...articleMetaProps} />
        </em>
      </div>
    </S.Main>
  )
}
