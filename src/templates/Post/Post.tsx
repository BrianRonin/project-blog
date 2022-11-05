import * as S from './S.Post'
import {
  Base_template,
  baseProps_template,
} from '../Base/Base'
import { type_strapi_settings } from '../../types/strapi/settings'
import {
  Post,
  postProps,
} from '../../components/POST/post/post'

export type postProps_template = {
  settings: type_strapi_settings
  post: postProps
}

export const Post_template = ({
  settings,
  post,
}: postProps_template) => {
  return (
    <S.Main>
      <Base_template settings={settings}>
        <Post {...post} />
      </Base_template>
    </S.Main>
  )
}
