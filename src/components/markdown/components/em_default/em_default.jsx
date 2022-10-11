import * as S from './S.em_default'

export const EmDefault = ({ node, className, children, ...props }) => {
  return (
    <S.Main>
      <em className children={children} {...props} />
    </S.Main>
  )
}
