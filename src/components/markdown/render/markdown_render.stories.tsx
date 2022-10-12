import { Meta, Story } from '@storybook/react/types-6-0'
import { MarkdownRender, MarkdownRenderProps } from './markdown_render'
import { markdown } from '../mock'

export default {
  title: 'markdown/Render',
  component: MarkdownRender,
  args: {
    children: markdown,
  },
  argTypes: {
    //
  },
} as Meta

export const Template: Story<MarkdownRenderProps> = (args) => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <MarkdownRender {...args} />
  </div>
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
