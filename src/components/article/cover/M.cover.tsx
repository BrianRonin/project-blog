import { mock_article_meta } from '../article_meta/M.article_meta'
import { coverProps } from './cover'
export const mock_cover = {
  articleMetaProps: { ...mock_article_meta },
  cover: {
    url: 'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg',
    altText: 'alt da imagem',
  },
} as coverProps
