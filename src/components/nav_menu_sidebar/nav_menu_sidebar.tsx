import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import {
  Close,
  Close as CloseIcon,
} from '@styled-icons/material-outlined/Close'
import { LogoLink } from '../logo_link/logo_link'
import * as S from './S.nav_menu_sidebar'
import { NavLink, navLinkProps } from '../nav_link/nav_link'
import { useState } from 'react'

export type navMenuSidebarProps = {
  links: navLinkProps[]
  title: string
  srcLogo: string
}

export const NavMenuSidebar = ({
  links,
  title,
  srcLogo,
}: navMenuSidebarProps) => {
  const [sideBarVisible, setSideBarVisible] =
    useState(false)

  function handleButtonOpenCloseSidebar(
    e: React.MouseEvent,
  ) {
    e.preventDefault()
    setSideBarVisible((visible) => !visible)
  }

  return (
    <>
      <S.OpenCloseSidebar
        sidebarVisible={sideBarVisible}
        href='#'
        aria-label='Open or close sidebar'
        title='Open or close menu'
        onClick={handleButtonOpenCloseSidebar}
      >
        {sideBarVisible && (
          <CloseIcon aria-label='Close sidebar' />
        )}
        {!sideBarVisible && (
          <MenuIcon aria-label='Open sidebar' />
        )}
      </S.OpenCloseSidebar>
      <S.Main sidebarVisible={sideBarVisible}>
        <S.Nav>
          <S.Logo>
            <S.bg_white>
              <LogoLink
                link='/'
                text={title}
                srcImg={srcLogo}
              />
            </S.bg_white>
          </S.Logo>
          {links.map((link, i) => (
            <NavLink
              key={'key-react-nav-menu-sidebar-' + i}
              link={link.link}
              newTab={link.newTab}
            >
              {link.children}
            </NavLink>
          ))}
        </S.Nav>
      </S.Main>
    </>
  )
}
