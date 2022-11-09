import { useRouter } from 'next/router'
import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'
import { Header } from '../../components/header/header'
import { NavMenuSidebar } from '../../components/MENU_NAV_SIDEBAR/nav_menu_sidebar/nav_menu_sidebar'
import { ToggleTheme } from '../../components/toggle_theme/toggle_theme'
import { type_strapi_settings } from '../../types/strapi/settings'
import * as S from './S.Base'

export type baseProps_template = {
  settings: any
  children: React.ReactNode
}

export const Base_template = ({
  settings,
  children,
}: baseProps_template) => {
  const router = useRouter()

  return (
    <S.Main>
      <ToggleTheme />
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
      <S.SearchContainer>
        <form action='/search/' method='GET'>
          <S.Search
            type={'search'}
            placeholder={'Encontre posts'}
            name={'q'}
            defaultValue={router?.query?.q}
          />
        </form>
      </S.SearchContainer>
      <S.Content>{children}</S.Content>
      <S.Footer>
        <Footer>teste</Footer>
      </S.Footer>
      <GoTop />
    </S.Main>
  )
}
