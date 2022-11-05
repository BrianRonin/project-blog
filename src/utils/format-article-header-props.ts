import { resolveLoadPosts } from '../api/load-posts'
import { articleHeaderProps } from '../components/ARTICLE/article_header/article_header'
import { type_strapi_tags } from '../types/strapi/tags'

export const format_article_header = (
  obj: resolveLoadPosts,
) => {
  const post = obj.posts.data[0].attributes
  const author = post.author.data.attributes
  const tags = post.tags.data
  const category = post.category.data.attributes
  const cover = post.cover.data.attributes
  return {
    title: post.title,
    excerpt: post.excerpt,
    coverWithMetaProps: {
      coverWithMeta: cover,
      articleMetaProps: {
        createdAt: post.createdAt,
        author,
        tags: tags.reduce<type_strapi_tags[]>(
          (prev, tag) => {
            return [...prev, tag.attributes]
          },
          [],
        ),
        category,
      },
    },
  } as articleHeaderProps
}
