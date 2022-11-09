import { renderTheme } from '../../styles/render-theme'
import { CommentsDisqus } from './comments_disqus'
import { mock_comments_disqus } from './M.comments_disqus'

describe('<CommentsDisqus />', () => {
  it('should render', () => {
    renderTheme(<CommentsDisqus { ...mock_comments_disqus } />)
  })
})
