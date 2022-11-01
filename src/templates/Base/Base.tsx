import { Footer } from '../../components/Footer'
import { Header } from '../../components/header/header'
import { NavMenuSidebar } from '../../components/MENU_NAV_SIDEBAR/nav_menu_sidebar/nav_menu_sidebar'
import { type_strapi_settings } from '../../types/strapi/settings'
import * as S from './S.Base'

export type baseProps = {
  settings: type_strapi_settings
  children: React.ReactNode
}

export const Base = ({
  settings,
  children,
}: baseProps) => {
  // return 'teste'
  return (
    <S.Main>
      <NavMenuSidebar
        links={settings.menu_link}
        srcLogo={settings.logo.url}
        title={settings.blog_name}
      />
      <S.Header>
        <Header
          title={settings.blog_name}
          description={settings.blog_description}
          srcImg={settings.logo.url}
          alt={'sei la'}
        />
      </S.Header>
      <S.Content>{children}</S.Content>
      <S.Footer>
        <Footer>teste</Footer>
      </S.Footer>
    </S.Main>
  )
}
