import { postProps } from './post'
import { mock_article_header } from '../article/article_header/M.article_header'
import { markdown } from '../markdown/mock'
export const mock_post = {
  articleHeaderProps: mock_article_header,
  markdown,
} as postProps
