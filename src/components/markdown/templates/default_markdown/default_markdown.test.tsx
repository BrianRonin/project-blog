import { renderTheme } from '../../../../styles/render-theme'
import { DefaultMarkdown } from './default_markdown'
describe('<DefaultMarkdown />', () => {
  it('should render', () => {
    renderTheme(<DefaultMarkdown children='' />)
  })
})
