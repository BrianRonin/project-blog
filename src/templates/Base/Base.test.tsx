import { renderTheme } from '../../styles/render-theme'
import { Base } from './Base'
import { mock_base } from './M.Base'

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base {...mock_base} />)
  })
})
