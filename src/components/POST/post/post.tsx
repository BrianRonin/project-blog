import * as S from './S.post'
import { DefaultMarkdown } from '../../markdown/templates/default_markdown/default_markdown'
import {
  ArticleHeader,
  articleHeaderProps,
} from '../../ARTICLE/article_header/article_header'
import { ContainerPost } from '../container_post/container_post'

export type postProps = {
  articleHeaderProps: articleHeaderProps
  content: string
}

export const Post = ({
  articleHeaderProps,
  content,
}: postProps) => {
  return (
    <S.Main>
      <ContainerPost size='max'>
        <ArticleHeader {...articleHeaderProps} />
      </ContainerPost>
      <ContainerPost size='content'>
        <DefaultMarkdown>
          {content}
        </DefaultMarkdown>
      </ContainerPost>
    </S.Main>
  )
}
