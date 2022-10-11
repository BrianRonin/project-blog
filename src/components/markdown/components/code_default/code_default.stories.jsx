import { MarkdownRender } from '../../render/markdown_render'
import { CodeDefault as code } from './code_default'

export default {
  title: 'Markdown/Code default',
  component: MarkdownRender,
  args: {
    children: `
  ~~~js
  console.log('i')
  ~~~

\`\`\`js
var x = 1

const obj = {
  x: function cagar() {
    console.log('estou cagando')
  }
}
\`\`\`
    `,
    components: { code },
  },
  argTypes: {
    //
  },
}

export const Template = (args) => <MarkdownRender {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
