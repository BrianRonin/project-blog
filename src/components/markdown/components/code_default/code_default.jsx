import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import * as S from './S.code_default'

export function CodeDefault({
  node,
  inline,
  className,
  children,
  ...props
}) {
  const match = /language-(\w+)/.exec(
    className || '',
  )
  return match ? (
    // <S.Main>
    <SyntaxHighlighter
      children={String(children).replace(
        /\n$/,
        '',
      )}
      style={dracula}
      language={match[1]}
      PreTag='div'
      {...props}
    />
  ) : (
    // </S.Main>
    <code>
      <code className={className} {...props}>
        <S.Main>{children}</S.Main>
      </code>
    </code>
  )
}
