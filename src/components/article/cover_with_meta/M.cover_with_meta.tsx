import { mock_article_meta } from '../article_meta/M.article_meta'
import { coverWithMetaProps } from './cover_with_meta'
export const mock_coverWithMeta = {
  articleMetaProps: { ...mock_article_meta },
  coverWithMeta: {
    url: 'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg',
    altText: 'alt da imagem',
  },
} as coverWithMetaProps
