
function teste() {

}
const obj = {}
console.log(obj.length ? 'sim' : 'não')
// teste()

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
