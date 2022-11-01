module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-constant-condition': 0,
    '@typescript-eslint/explicit-module-boundary-types':
      'off',
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'no-trailing-spaces': 0,
    'react/no-unused-state': 0,
    // "jsx-quotes": ["error", "prefer-single"],
    'import/no-duplicates': 0,
    'class-methods-use-this': 0,
    'no-useless-return': 0,
    'spaced-comment': 0,
    'react/forbid-prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'import/no-anonymous-default-export': 0,
    'react/no-children-prop': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
}
