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
import { CommentsDisqus } from '../../components/comments_disqus/comments_disqus'

export type postProps_template = {
  settings: type_strapi_settings
  post: postProps
  slug: string
}

export const Post_template = ({
  settings,
  post,
  slug,
}: postProps_template) => {
  return (
    <S.Main>
      <Base_template settings={settings}>
        <Post {...post} />
        <CommentsDisqus
          slug={slug}
          allowComments={
            post.articleHeaderProps
              .coverWithMetaProps.articleMetaProps
              .allowComments
          }
          title={post.articleHeaderProps.title}
        />
      </Base_template>
    </S.Main>
  )
}
