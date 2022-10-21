import { mock_article_header } from '../../../components/ARTICLE/article_header/M.article_header'
import { postGridProps } from '../post_grid/post_grid'
export const mock_post_grid = {
  posts: [
    {
      slug: 'slug 1',
      ...mock_article_header,
    },
    {
      slug: 'slug 2',
      ...mock_article_header,
    },
    {
      slug: 'slug 3',
      ...mock_article_header,
    },
  ],
} as postGridProps
