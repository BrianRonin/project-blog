import { postsProps_template } from './Posts'
import { mock_base_template } from '../Base/M.Base'
import { mock_post_grid } from '../../components/POST/post_grid/M.post_grid'

export const mock_posts_template = {
  settings: mock_base_template.settings,
  posts: mock_post_grid.posts,
} as postsProps_template
