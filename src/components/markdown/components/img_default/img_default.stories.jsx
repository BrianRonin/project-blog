import { MarkdownRender } from '../../render/markdown_render'
import { ImgDefault as img } from './img_default'

export default {
  title: 'markdown/Img default',
  component: img,
  args: {
    children: `
![sei](https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg)
*comentario sobre a imagem*
`,
    components: {
      img,
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
