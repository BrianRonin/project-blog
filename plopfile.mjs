export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  // plop generator code
  plop.setWelcomeMessage('escolha um plop para gerar plops: \n')
  plop.setGenerator('component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'qual o nome do seu componente?',
      },
      {
        type: 'rawlist',
        name: 'chield',
        choices: ['chield', 'noChield'],
        message: 'tem chield?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'addMany',
        destination: './src/components/{{ snakeCase name }}', //diretorio destiono
        stripExtensions: 'hbs', // .extension a ser removido
        templateFiles: 'src/components/generator/ts/{{chield}}/**.hbs',
        base: 'src/components/generator/ts/{{chield}}/',
      },
    ], // array of actions
  })
}
