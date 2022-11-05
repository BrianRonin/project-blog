import { gql } from 'graphql-request'
import { GRAPHQL_FRAGMENTS } from './fragments'

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $category: String
    $title: String
    $slug: String
    $author: String
    $tag: String
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      ...settings
    }
    posts(
      sort: $sort
      filters: {
        slug: { eq: $slug }
        category: {
          slug: { containsi: $category }
        }
        title: { containsi: $title }
        author: { slug: { containsi: $author } }
        tags: { slug: { containsi: $tag } }
      }
      pagination: { start: $start, limit: $limit }
    ) {
      ...posts
    }
  }

  # query GET_SETTINGS {
  #   setting {
  #     ...settings
  #   }
  # }

  # query GET_POST_BY_ID($id: ID) {
  #   setting {
  #     ...settings
  #   }
  #   post(id: $id) {
  #     ...post
  #   }
  # }

  # query GET_POST_BY_SLUG($post: String) {
  #   setting {
  #     ...settings
  #   }
  #   posts(filters: { slug: { eq: $post } }) {
  #     ...posts
  #   }
  # }

  # query GET_POST_BY_AUTHOR($slug: String) {
  #   setting {
  #     ...settings
  #   }
  #   posts(
  #     filters: { author: { slug: { eq: $slug } } }
  #   ) {
  #     ...posts
  #   }
  # }

  # query GET_POST_BY_CATEGORY($category: String) {
  #   setting {
  #     ...settings
  #   }
  #   posts(
  #     filters: {
  #       category: { slug: { eq: $category } }
  #     }
  #   ) {
  #     ...posts
  #   }
  # }

  # query GET_POST_BY_TAGS($tags: String) {
  #   setting {
  #     ...settings
  #   }
  #   posts(
  #     filters: { tags: { slug: { eq: $tags } } }
  #   ) {
  #     ...posts
  #   }
  # }
`
