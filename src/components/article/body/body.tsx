import * as S from './S.body'

export type bodyProps = {
	children: React.ReactNode
	articleMeta: any

}

export const Body = ({ children, articleMeta,  }: bodyProps) => {
  return (
		<S.Main>
			{children}
		</S.Main>
	)
}
