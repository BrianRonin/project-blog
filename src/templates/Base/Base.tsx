import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'
import { Header } from '../../components/header/header'
import { NavMenuSidebar } from '../../components/MENU_NAV_SIDEBAR/nav_menu_sidebar/nav_menu_sidebar'
import { type_strapi_settings } from '../../types/strapi/settings'
import * as S from './S.Base'

export type baseProps_template = {
  settings: {
    menu_link: any
  }
  children: React.ReactNode
}

export const Base_template = ({
  settings,
  children,
}: baseProps_template) => {
  // return 'teste'
  return (
    <S.Main>
      <NavMenuSidebar
        links={settings.menu_link}
        srcLogo={settings.logo?.url}
        title={settings.blog_name}
      />
      <S.Header>
        <Header
          title={settings.blog_name}
          description={settings.blog_description}
          srcImg={settings.logo?.url}
          alt={settings.logo?.alternativeText}
        />
      </S.Header>
      <S.Content>{children}</S.Content>
      <S.Footer>
        <Footer>teste</Footer>
      </S.Footer>
      <GoTop />
    </S.Main>
  )
}
