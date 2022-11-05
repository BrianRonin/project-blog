import { resolveLoadPosts } from '../api/load-posts'
import { format_article_header } from './format-article-header-props'

export const format_post = (
  obj: resolveLoadPosts,
) => {
  return {
    articleHeaderProps:
      format_article_header(obj),
    content: obj.posts.data[0].attributes.content,
  }
}
