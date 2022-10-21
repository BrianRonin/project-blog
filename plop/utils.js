export const isEmptyObject = (obj) => {
  return JSON.stringify(obj) === '{}'
}

export function camelize(text) {
  function camelize_(text) {
    text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : ``);
    return text.substr(0, 1).toLowerCase() + text.substr(1);
  }
  text = text.replace(/[^a-zA-Z0-9$_\-\s.]/g, ``).replace(/^[0-9_\-\s.]+/, ``);
  return camelize_(text);
}

export const propperCase = (string) => {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

export const snakeCase = str => str && str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  .map(x => x.toLowerCase())
  .join('_');
