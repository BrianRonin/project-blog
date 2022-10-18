import * as S from './S.post'
import { DefaultMarkdown } from '../../markdown/templates/default_markdown/default_markdown'
import { ContainerPost } from '../../container_post/container_post'
import {
  ArticleHeader,
  articleHeaderProps,
} from '../../ARTICLE/article_header/article_header'

export type postProps = {
  articleHeaderProps: articleHeaderProps
  markdown: string
}

export const Post = ({
  articleHeaderProps,
  markdown,
}: postProps) => {
  return (
    <S.Main>
      <ContainerPost size='max'>
        <ArticleHeader {...articleHeaderProps} />
      </ContainerPost>
      <ContainerPost size='content'>
        <DefaultMarkdown>
          {markdown}
        </DefaultMarkdown>
      </ContainerPost>
    </S.Main>
  )
}
