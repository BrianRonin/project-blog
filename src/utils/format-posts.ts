import { postCardProps } from './../components/POST/post_card/post_card'
import { type_strapi_post } from '../types/strapi/post'
import { format_cover_with_meta_props } from './format-cover-with-meta-props'

export const formater_posts = (
  posts: any,
): postCardProps[] => {
  return posts.reduce((prev: any, _post: any) => {
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
