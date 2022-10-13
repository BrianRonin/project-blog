import * as S from './S.nav_link'
import Link from 'next/link'

export type navLinkProps = {
  children: React.ReactNode
  link: string
  newTab?: boolean
}

export const NavLink = ({
  children,
  link,
  newTab = false,
}: navLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  const isNextLink = link.match(/^\//) ? true : false
  if (isNextLink) {
    return (
      <Link href={link} passHref>
        <S.Main target={target}>{children}</S.Main>
      </Link>
    )
  }
  return (
    <S.Main href={link} target={target}>
      {children}
    </S.Main>
  )
}
