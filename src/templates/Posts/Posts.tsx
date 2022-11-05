import * as S from './S.Posts'
import {
  Base_template,
  baseProps_template,
} from '../Base/Base'
import { type_strapi_settings } from '../../types/strapi/settings'
import { PostGrid } from '../../components/POST/post_grid/post_grid'
import { postCardProps } from '../../components/POST/post_card/post_card'

export type postsProps_template = {
  posts: postCardProps[]
  settings: type_strapi_settings
}

export const Posts_template = ({
  settings,
  posts = [],
}: postsProps_template) => {
  return (
    <S.Main>
      <Base_template settings={settings}>
        <PostGrid posts={posts} />
      </Base_template>
    </S.Main>
  )
}
