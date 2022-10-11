import { MarkdownRender } from '../../render/markdown_render'
import { TableDefault } from './table_default'

export default {
  title: 'markdown/Table default',
  component: TableDefault,
  args: {
    children: `

| keys             | oque faz                 |
| ---------------- | ------------------------ |
| Enter            | linha de baixo           |
| Tab              | ==>                      |
| shifit + tab     | linha de cima            |
| Ctrl + Shift + D | Abre o plugin            |
| Alt + P          | deleta tabela horizontal |
| Alt + Shift + P  | deleta coluna            |
| Alt + -          | move row pra baixo       |
| alt + =          | move row pra cima        |

    `,
    components: {
      table: TableDefault,
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
