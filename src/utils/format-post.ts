import { postProps } from './../components/POST/post/post'
import { postProps_template } from './../templates/Post/Post'
import { postCardProps } from './../components/POST/post_card/post_card'
import { resolveLoadPosts } from '../api/load-posts'
import { format_article_header } from './format-article-header-props'

export const format_post = (
  obj: resolveLoadPosts,
): postProps => {
  return {
    articleHeaderProps:
      format_article_header(obj),
    content: obj.posts.data[0].attributes.content,
  }
}
