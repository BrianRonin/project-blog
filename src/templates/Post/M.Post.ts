import { postProps_template } from './Post'
import { mock_base_template } from '../Base/M.Base'
import { markdown } from '../../components/markdown/mock'
import { mock_article_header } from '../../components/ARTICLE/article_header/M.article_header'

export const mock_post_template = {
  settings: mock_base_template.settings,
  post: {
    articleHeaderProps: mock_article_header,
    content: markdown,
  },
} as postProps_template
