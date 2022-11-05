import { gql } from 'graphql-request'

export const GRAPHQL_FRAGMENTS = gql`
  fragment imageEntity on UploadFileEntity {
    attributes {
      url
      alternativeText
    }
  }

  fragment cover on Post {
    cover {
      ...image
    }
  }

  fragment authorEntity on AuthorEntity {
    attributes {
      name
      slug
    }
  }

  fragment author on AuthorEntityResponse {
    data {
      ...authorEntity
    }
  }

  fragment tagEntity on TagEntity {
    attributes {
      name
      slug
    }
  }

  # fragment tag on TagEntityResponse {
  #   data {
  #     ...tagEntity
  #   }
  # }

  fragment tags on TagRelationResponseCollection {
    data {
      ...tagEntity
    }
  }

  fragment categoryEntity on CategoryEntity {
    attributes {
      name
      slug
    }
  }

  fragment category on CategoryEntityResponse {
    data {
      ...categoryEntity
    }
  }

  # fragment categorys on CategoryEntityResponseCollection {
  #   data {
  #     ...categoryEntity
  #   }
  # }

  # fragment images on UploadFileEntityResponseCollection {
  #   data {
  #     ...imageEntity
  #   }
  # }

  fragment image on UploadFileEntityResponse {
    data {
      ...imageEntity
    }
  }

  # fragment menuLink on ComponentMenuMenuLink {
  #   id
  #   link
  #   text
  #   new_tab
  # }

  fragment settings on SettingEntityResponse {
    data {
      id
      attributes {
        blog_name
        blog_description
        logo {
          ...image
        }
        menu_link {
          id
          new_tab
          text
          link
        }
      }
    }
  }

  fragment postEntity on PostEntity {
    id
    attributes {
      title
      slug
      excerpt
      content
      allow_comments
      author {
        ...author
      }
      category {
        ...category
      }
      tags {
        ...tags
      }
      ...cover
    }
  }

  # fragment post on PostEntityResponse {
  #   data {
  #     ...postEntity
  #   }
  # }
  fragment posts on PostEntityResponseCollection {
    data {
      ...postEntity
    }
  }
`
