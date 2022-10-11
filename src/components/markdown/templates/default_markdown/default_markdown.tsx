import * as S from './S.default_markdown'
import { MarkdownRender } from '../../render/markdown_render'
import { CodeDefault as code } from '../../components/code_default/code_default'
import { TableDefault as table } from '../../components/table_default/table_default'
import { ImgDefault as img } from '../../components/img_default/img_default'
import { EmDefault as em } from '../../components/em_default/em_default'
export type defaultMarkdownProps = {
  children: string
}

export const DefaultMarkdown = ({ children }: defaultMarkdownProps) => {
  return (
    <S.Main>
      <MarkdownRender
        children={children}
        components={{ code, table, img, em }}
      />
    </S.Main>
  )
}
