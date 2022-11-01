import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Base, baseProps } from './Base'
import { mock_base } from './M.Base'

export default {
  title: 'templates/Base',
  component: Base,
  args: mock_base,
} as Meta
export const Template: Story<baseProps> = (
  args,
) => <Base {...args} />

Template.parameters = {
  screen: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
