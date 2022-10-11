import * as S from './S.table_default'

export const TableDefault = ({ className, children, ...props }) => {
  return (
    <S.Main>
      <table className={className} {...props}>
        {children}
      </table>
    </S.Main>
  )
}
