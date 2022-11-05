import { type_strapi_post } from '../types/strapi/post'
import { type_strapi_tags } from '../types/strapi/tags'
import { format_cover_with_meta_props } from './format-cover-with-meta-props'

export const formater_posts = (
  posts: { attributes: type_strapi_post }[],
) => {
  return posts.reduce((prev, _post, index) => {
    const post: type_strapi_post =
      _post.attributes
    const resolve = {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverWithMetaProps:
        format_cover_with_meta_props(post),
    }
    return [...prev, resolve]
  }, [])
}
