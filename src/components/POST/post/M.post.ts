import { postProps } from './post'
import { mock_article_header } from '../../ARTICLE/article_header/M.article_header'
import { markdown } from '../../markdown/mock'
export const mock_post_template = {
  articleHeaderProps: mock_article_header,
  content: markdown,
} as postProps
