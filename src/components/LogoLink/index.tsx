import * as S from './styles'
import { Heading } from '../Heading'
import Link from 'next/link'

export type logoLinkProps = {
  text: string
  srcImg?: string
  link: string
  newTab?: boolean
}

export const LogoLink = ({
  text,
  srcImg = '',
  link = '',
  newTab = false,
}: logoLinkProps) => {
  const isNextLink = link.match(/^\//) ? true : false
  const target = newTab ? '_blank' : '_self'
  if (isNextLink) {
    return (
      <Heading size='small' uppercase>
        <Link href={link} passHref target={target}>
          <S.Main>
            {!!srcImg && <S.Logo src={srcImg} alt={text} />}
            {!srcImg && text}
          </S.Main>
        </Link>
      </Heading>
    )
  }

  return (
    <Heading size='small' uppercase>
      <S.Main href={link} target={target}>
        {!!srcImg && <S.Logo src={srcImg} alt={text} />}
        {!srcImg && text}
      </S.Main>
    </Heading>
  )
}
