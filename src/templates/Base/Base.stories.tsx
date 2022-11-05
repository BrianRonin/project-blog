import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  Base_template,
  baseProps_template,
} from './Base'
import { mock_base_template } from './M.Base'

export default {
  title: 'templates/Base',
  component: Base_template,
  args: mock_base_template,
} as Meta
export const Template: Story<
  baseProps_template
> = (args) => <Base_template {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
