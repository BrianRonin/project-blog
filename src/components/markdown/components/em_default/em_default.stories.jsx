import { EmDefault as em } from './em_default'
import { MarkdownRender } from '../../render/markdown_render'

export default {
  title: 'markdown/Em default',
  component: em,
  args: {
    children: `
  ![ok](https://citizengo.org/sites/default/files/styles/large/public/images/test.png?itok=21TsxGHU)

  *ok*
  `,
    components: {
      em,
    },
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
