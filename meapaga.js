
function testeClasse() {
  class xy {
    x = 'ffffff'
    static camelCase() {
      return console.log()
    }
  }

  class Component {
    constructor(x) {
      this.x = x
    }
    x = this.arg

    teste() {
      const y = 'aaaaaaaaaaaaa'
      return xy.camelCase()
    }
  }

  const x = new Component('funcionou?')
  x.teste()
}
const case_modifiers = {
  camelCase: (text) => {
    function camelize_(text) {
      text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : ``);
      return text.substr(0, 1).toLowerCase() + text.substr(1);
    }
    text = text.replace(/[^a-zA-Z0-9$_\-\s.]/g, ``).replace(/^[0-9_\-\s.]+/, ``);
    return camelize_(text);
  },
  snakeCase: str => str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_'),
  properCaseOrPascalCase: (string) => {
    return `${string}`
      .toLowerCase()
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w*)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3}`
      )
      .replace(new RegExp(/\w/), s => s.toUpperCase());
  },
  ok: 'sim'
}

console.log(case_modifiers['camelCase']('ola como vai voce'))

// teste(' ##Teste')
// teste('#_ # teste')
// teste('_# teste')
// teste('# _teste')

const camelize = str => str && str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  .map(x => x.toLowerCase())
  .join('_');

// console.log(camelize('?changeFormatToThis'))
// console.log(camelize('?change_format_to_this 1'))
// console.log(camelize('?change-format-to-this 2'))
// console.log(camelize('?change.format.to.this 3'))
// console.log(camelize('?change.format.to.this 4'))
// console.log(camelize('?change/format/to/this 5'))
// console.log(camelize('?ChangeFormatToThis 6'))
// console.log(camelize('?change format to this 7'))
// console.log(camelize('?Change format to this 8'))
// console.log(camelize('?CHANGE_FORMAT_TO_THIS 9'))
// console.log(camelize('?Change Format To This 10'))

// function camelCaseRegex(string) {
//   const replaced = string.replace(/^([a-zA-Z])|(\s.)/g,
//     (match, firstWord, betweenSpaces) => {
//       return match.trimStart().toUpperCase();
//     });

//   console.log(replaced);
// }

// camelCaseRegex('java script exercises');
