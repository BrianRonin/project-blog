import { postTagsProps } from 'components/POST/post_tags/post_tags'
import { postProps } from '../../components/POST/post/post'
import { type_strapi_author } from './author'
import { type_strapi_category } from './category'
import { type_strapi_img } from './image'
import { type_strapi_tags } from './tags'

export type type_strapi_post = {
  title: string
  slug: string
  excerpt: string
  content: string
  allow_comments: boolean
  author: {
    data: {
      attributes: type_strapi_author
    }
  }
  category: {
    data: {
      attributes: type_strapi_category
    }
  }
  tags: {
    data: {
      attributes: type_strapi_tags
    }[]
  }
  cover: {
    data: {
      attributes: type_strapi_img
    }
  }
  createdAt: string
}
