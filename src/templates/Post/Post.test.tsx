import { renderTheme } from '../../styles/render-theme'
import { Post } from './Post'
import { mock_post } from './M.Post'

describe('<Post />', () => {
  it('should render', () => {
    renderTheme(<Post { mock_post } />)
  })
})
