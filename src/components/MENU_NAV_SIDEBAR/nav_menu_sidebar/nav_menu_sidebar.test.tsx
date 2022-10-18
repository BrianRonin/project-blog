import {
  fireEvent,
  screen,
} from '@testing-library/react'
import { renderTheme } from '../../../styles/render-theme'
import { mock_nav_menu_sidebar } from './M.nav_menu_sidebar'
import { NavMenuSidebar } from './nav_menu_sidebar'
describe('<NavMenuSidebar />', () => {
  it('should render correctly', () => {
    const { container, debug } = renderTheme(
      <NavMenuSidebar
        {...mock_nav_menu_sidebar}
      />,
    )

    const button = screen.getByRole('link', {
      name: 'Open or close sidebar',
    })

    type type_methods_getIconSideBar = {
      get: 'getByLabelText'
      query: 'queryByLabelText'
    }
    type type_key_getIconSideBar =
      keyof type_methods_getIconSideBar
    const getIconSidebar = (
      ico: 'Open sidebar' | 'Close sidebar',
      method: type_key_getIconSideBar,
    ): Element | null => {
      const methods: type_methods_getIconSideBar =
        {
          get: 'getByLabelText',
          query: 'queryByLabelText',
        }
      return screen[methods[method]](ico)
    }
    function expectionsInSidebarHidden() {
      expect(
        getIconSidebar('Open sidebar', 'get'),
      ).toBeInTheDocument()
      expect(
        getIconSidebar('Close sidebar', 'query'),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('navigation'),
      ).not.toBeInTheDocument()
    }
    function expectionsInSidebar() {
      expect(
        screen.getByRole('heading', {
          name: 'Brian',
        }),
      )
      expect(
        screen.getByRole('img', {
          name: 'Brian',
        }),
      )
      expect(
        screen.queryByRole('navigation'),
      ).toBeInTheDocument()
      expect(
        getIconSidebar('Open sidebar', 'query'),
      ).not.toBeInTheDocument()
      expect(
        getIconSidebar('Close sidebar', 'get'),
      ).toBeInTheDocument()
      expect(
        getIconSidebar('Open sidebar', 'query'),
      ).not.toBeInTheDocument()
      expect(
        screen
          .getByRole('navigation')
          .querySelectorAll('a:not([href="/"])'),
      ).toHaveLength(
        mock_nav_menu_sidebar.links.length,
      )
    }

    expectionsInSidebarHidden()
    fireEvent.click(button)
    expectionsInSidebar()
    fireEvent.click(button)
    expectionsInSidebarHidden()

    expect(container).toMatchSnapshot()
  })
})
