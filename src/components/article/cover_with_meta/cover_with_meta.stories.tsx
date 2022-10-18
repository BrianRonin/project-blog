import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  CoverWithMeta,
  coverWithMetaProps,
} from './cover_with_meta'
import { mock_coverWithMeta } from './M.cover_with_meta'

export default {
  title:
    'components/article/Article Cover with Meta',
  component: CoverWithMeta,
  args: mock_coverWithMeta,
  argTypes: {
    //
  },
} as Meta

export const Template: Story<
  coverWithMetaProps
> = (args) => <CoverWithMeta {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
