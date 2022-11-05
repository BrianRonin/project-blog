import { request } from 'graphql-request'
import config from '../config'
import { GRAPHQL_QUERY } from '../graphql/queries'
import { type_strapi_post } from '../types/strapi/post'
import { type_strapi_settings } from '../types/strapi/settings'

export type load_posts_variables = {
  category?: string
  slug?: string
  title?: string
  author?: string
  tag?: string
  sort?: string
  start?: number
  limit?: number
}

export type resolveLoadPosts = {
  setting: {
    data: {
      attributes: type_strapi_settings
    }
  }
  posts: {
    data: { attributes: type_strapi_post }[]
  }
  variables?: load_posts_variables
}

export const default_variables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 1,
}

export const loadPosts = async (
  _var: load_posts_variables = {},
): Promise<resolveLoadPosts> => {
  const data = await request(
    config.graphqlUrl,
    GRAPHQL_QUERY,
    { ...default_variables, ..._var },
  )

  return data
}
