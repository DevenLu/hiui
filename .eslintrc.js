module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false, printWidth: 120, trailingComma: 'none' }],
    'react/prop-types': 0,
    'react/no-children-prop': 0,
    'react/display-name': 0
  }
}
