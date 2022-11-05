import * as S from './S.Posts'
import {
  Base_template,
  baseProps_template,
} from '../Base/Base'
import { useState } from 'react'
import { type_strapi_settings } from '../../types/strapi/settings'
import { PostGrid } from '../../components/POST/post_grid/post_grid'
import { postCardProps } from '../../components/POST/post_card/post_card'
import {
  default_variables,
  loadPosts,
  load_posts_variables,
} from '../../api/load-posts'
import { formater_posts } from '../../utils/format-posts'
import { type_strapi_post } from '../../types/strapi/post'

export type postsProps_template = {
  _posts: postCardProps[]
  settings: type_strapi_settings
  _variables: load_posts_variables
}

export const Posts_template = ({
  settings,
  _posts = [],
  _variables,
}: postsProps_template) => {
  const [posts, setPosts] = useState(_posts)
  const [variables, setVariables] = useState(
    default_variables,
  )
  const [hasMorePosts, sethasMorePosts] =
    useState(true)
  const [
    disableButtonMorePosts,
    setDisableButtonMorePosts,
  ] = useState(false)

  const handleLoadMorePosts = async () => {
    setDisableButtonMorePosts(true)

    const newVariables = {
      ...variables,
      start: variables.start + variables.limit,
      limit: variables.limit,
    }

    const morePosts = await loadPosts(
      newVariables,
    )

    if (morePosts.posts.data.length) {
      setDisableButtonMorePosts(false)
      setVariables(newVariables)
      setPosts((p) => [
        ...p,
        ...formater_posts(morePosts.posts.data),
      ])
    } else {
      sethasMorePosts(false)
      return
    }
    setDisableButtonMorePosts(false)
  }

  return (
    <S.Main>
      <Base_template settings={settings}>
        <PostGrid
          posts={posts}
          hasLoadMore={{
            handleButton: handleLoadMorePosts,
            hasMore: hasMorePosts,
            buttonDisabled:
              disableButtonMorePosts,
          }}
        />
      </Base_template>
    </S.Main>
  )
}
