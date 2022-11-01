import { postTagsProps } from 'components/POST/post_tags/post_tags'

export type type_strapi_post = postProps & {
  tags: postTagsProps
  slug: string
}
