import { camelize, isEmptyObject, propperCase, snakeCase } from '../utils'

export const var_components = {
  name: '',
  hasChield: false,
  hasProps: false,
  hasMock: false,
  hasTest: false,
  hasStorybook: false,
  lengthProps: 0
}

class caseModifiers {
  constructor(str) {
    this.str = str
  }
}

let _props = []
let propsOptional = {}
let propsComponent = {}
let _propsType = []
let _propsArg = []
let _mock = []

Object.defineProperties(var_components, {
  props: {
    enumerable: true,
    get() { return _props },
    set(value) {
      (function filter() {
        const x = value.split(',')
        x.map((e = '', i) => {
          let prop = ''
          for (let i = 0;i <= x.length;i++) {
            if (x[i].match(/[^_\s#]/)) {
              prop = e.substring(i)
              _props.push(prop)
              break
            }
          }
          if (e.match('_')) { propsOptional[i] = 'optional' }
          if (e.match('#')) {
            propsComponent[i] = {
              snakeCase: snakeCase(prop),
              propperCase: propperCase(prop),
              camelCase: camelize(prop)
            }
          }
        })
      })()
      var_components.propsArg = _props
      var_components.propsType = _props
      var_components.mock = _props
      return _props
    }
  },
  propsType: {
    enumerable: true,
    get() { return _propsType.join('') },
    set(value) {
      value.map((x, i) => {
        let e = x.match('#')
          ? propsComponent[i].propperCase + 'Props'
          : camelize(x)
        let isOptional = propsOptional[i] ? '?' : ''
        if (i === 0) {
          _props.length > 0
            ? _propsType.push(`\n\t${e}${isOptional}: any\n\t`)
            : _propsType.push(`\n\t${e}${isOptional}: any`)
        } else {
          _props.length === i + 1
            ? _propsType.push(`\t${e}${isOptional}: any`)
            : _propsType.push(`\t${e}${isOptional}: any\n`)
        }
      })
    }
  },
  propsArg: {
    enumerable: true,
    get() { return _propsArg.join('') },
    set(value) {
      value.map((x, i) => {
        // _propsArg.push(x + '\n')
        let e = x.match('#')
          ? propsComponent[i].propperCase + 'Props'
          : camelize(x)
        if (i === 0) {
          _props.length > 0
            ? _propsArg.push(e + ', ')
            : _propsArg.push(e)
        } else {
          _propsArg.push(_props.length === (i + 1)
            ? e
            : e + ', '
          )
        }
      })
    }
  },
  mock: {
    enumerable: true,
    get() { return _mock.join('') },
    set(value) {
      value.map((x, i) => {
        const e = x.match('_')
          ? x
          : camelize(x)
        let isComponent = isEmptyObject(propsComponent[i])
          ? `${e}: mock_${propsComponent[i].snakeCase},`
          : `// ${e}: ,`
        if (i === 0) {
          _props.length > 0
            ? _mock.push(`\n\t${isComponent}\n\t`)
            : _mock.push(`\n\t${isComponent}`)
        } else {
          _props.length === i + 1
            ? _mock.push(`\t${isComponent}`)
            : _mock.push(`\t${isComponent}\n`)
        }
      })
    }
  },
})
