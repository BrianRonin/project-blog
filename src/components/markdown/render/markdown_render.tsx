import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type MarkdownRenderProps = {
  children: string
  components?: any
}

export const MarkdownRender = ({
  children,
  components,
}: MarkdownRenderProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
      children={children}
    />
  )
}
