import * as S from './S.img_default'

export const ImgDefault = ({ node, className, children, ...props }) => {
  return (
    <S.Main className='img-container'>
      <img className='img' {...props} />
    </S.Main>
  )
}
