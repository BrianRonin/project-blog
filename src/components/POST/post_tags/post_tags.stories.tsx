import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  PostTags,
  postTagsProps,
} from './post_tags'
import { mock_post_tags } from './M.post_tags'

export default {
  title: 'components/post/post tags',
  component: PostTags,
  args: mock_post_tags,
} as Meta

export const Template: Story<postTagsProps> = (
  args,
) => (
  <div style={{ padding: '2.4rem' }}>
    <p>
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Debitis commodi
      voluptatibus culpa, placeat consectetur
      rerum hic id laborum error necessitatibus
      reprehenderit adipisci ipsum modi cumque
      odit iusto magnam non minima!
    </p>
    <PostTags {...args} />
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Veritatis, sunt in? Iure
      laboriosam consectetur commodi! Pariatur
      exercitationem deserunt distinctio iste
      adipisci a in saepe quia consequatur dolor?
      Facere, nobis ex.
    </p>
  </div>
)
Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
