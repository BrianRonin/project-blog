import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import * as S from './S.code_default'

export function CodeDefault({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <S.Main>
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={dracula}
        language={match[1]}
        PreTag='div'
        {...props}
      />
    </S.Main>
  ) : (
    <S.Main>
      <code className={className} {...props}>
        {children}
      </code>
    </S.Main>
  )
}
