import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { mock_post_grid } from './M.post_grid'
import {
  PostGrid,
  postGridProps,
} from './post_grid'

export default {
  title: 'components/post/Post grid',
  component: PostGrid,
  args: mock_post_grid,
  argTypes: {
    //
  },
} as Meta

export const Template: Story<postGridProps> = (
  args,
) => <PostGrid {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
