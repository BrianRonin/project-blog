import * as S from './S.button'

export type buttonProps = {
  text?: string
  size?: 'huge' | 'big' | 'medium' | 'small'
  handle?: () => any
  disabled: boolean
}

export const Button = ({
  text,
  size,
  handle,
  disabled,
}: buttonProps) => {
  return (
    <S.Main size={size}>
      <button
        onClick={handle}
        disabled={disabled}
      >
        {text}
      </button>
    </S.Main>
  )
}
