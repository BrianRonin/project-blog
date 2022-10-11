import { Meta, Story } from '@storybook/react/types-6-0'
import { DefaultMarkdown, defaultMarkdownProps } from './default_markdown'
import { markdown } from '../../mock'

export default {
  title: 'markdown/templates/Default markdown',
  component: DefaultMarkdown,
  args: {
    children: markdown,
  },
  argTypes: {
    //
  },
} as Meta

export const Template: Story<defaultMarkdownProps> = (args) => (
  <DefaultMarkdown {...args} />
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
