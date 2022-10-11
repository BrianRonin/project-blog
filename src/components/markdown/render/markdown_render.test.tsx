import { renderTheme } from '../../../styles/render-theme'
import { MarkdownRender } from './markdown_render'
describe('<MarkdownRender />', () => {
  it('should render', () => {
    renderTheme(<MarkdownRender children='test' />)
  })
})
