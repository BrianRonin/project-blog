import * as S from './S.nav_link'
import Link from 'next/link'

export type navLinkProps = {
  text: string
  link: string
  newTab?: boolean
}

export const NavLink = ({
  text,
  link,
  newTab = false,
}: navLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  const isNextLink = link.match(/^\//)
    ? true
    : false
  if (isNextLink) {
    return (
      <Link href={link} passHref>
        <S.Main target={target}>{text}</S.Main>
      </Link>
    )
  }
  return (
    <S.Main href={link} target={target}>
      {text}
    </S.Main>
  )
}
